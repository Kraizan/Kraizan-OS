import { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { ApiResponse, PlatformStats } from "@/data/types/contest";
import { platforms } from "@/data/platforms";
import { getRankInfo } from "@/utils/rankInfo";
import { getContestEndpoint, getAuthHeader } from "@/config/api";
import { useSettings } from "@/context/SettingsContext";
import PlatformSelector from "./components/PlatformSelector";
import UserInfoHeader from "./components/UserInfoHeader";
import StatsGrid from "./components/StatsGrid";
import RatingChart from "./components/RatingChart";
import ContestTable from "./components/ContestTable";
import { getCachedData, setCachedData } from "@/utils/cache";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const TaskManager = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    platforms[0].name
  );
  const [stats, setStats] = useState<PlatformStats | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useSettings();
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [
      {
        label: "Rating",
        data: [],
        borderColor: "#FFFFFF",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Rating History",
        color: "#FFFFFF",
        font: {
          size: 16,
          weight: "bold" as const,
        },
      },
      tooltip: {
        callbacks: {
          title: (context: any) => {
            return context[0].label;
          },
          label: (context: any) => {
            return `Rating: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 12,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          color: "#FFFFFF",
          font: {
            size: 11,
          },
          autoSkip: true,
          maxTicksLimit: 30,
        },
      },
    },
  };

  const fetchPlatformStats = async (platformName: string) => {
    setLoading(true);
    setError(null);
    setStats(null);

    try {
      const platform = platforms.find((p) => p.name === platformName);
      if (!platform) throw new Error("Platform not found");

      // Try to get cached data first
      const cacheKey = `platform_stats_${platform.accountId}`;
      const cachedStats = getCachedData<PlatformStats>(cacheKey);

      console.log(cachedStats);

      if (cachedStats) {
        setStats(cachedStats);
        updateChartData(cachedStats.contestHistory);
        setLoading(false);
        return;
      }

      // If no cached data, fetch from API
      const response = await axios.get<ApiResponse>(
        getContestEndpoint(platform.accountId),
        { headers: getAuthHeader() }
      );

      if (!response.data?.objects || response.data.objects.length === 0) {
        throw new Error("No contest data available");
      }

      const contestHistory = response.data.objects;
      const latestContest = contestHistory[0];
      const maxRating = Math.max(...contestHistory.map((c) => c.new_rating));
      const bestRank = Math.min(...contestHistory.map((c) => c.place));
      const maxRatingChange = Math.max(
        ...contestHistory.map((c) => c.rating_change)
      );

      // Sort contests by rank and get top 3
      const bestContests = [...contestHistory]
        .sort((a, b) => a.place - b.place)
        .slice(0, 3);

      const platformStats: PlatformStats = {
        platform: platform.name,
        rating: latestContest.new_rating,
        currentRank: latestContest.place,
        maxRating,
        bestRank,
        maxRatingChange,
        totalContests: response.data.meta.total_count || contestHistory.length,
        recentPerformance: latestContest.score,
        ratingChange: latestContest.rating_change,
        color: getRankInfo(latestContest.new_rating, platform.name).color,
        rankName: getRankInfo(latestContest.new_rating, platform.name).rankName,
        handle: latestContest.handle,
        contestHistory,
        bestContests,
      };

      // Cache the stats before setting state
      setCachedData(cacheKey, platformStats);
      setStats(platformStats);
      updateChartData(contestHistory);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateChartData = (contestHistory: any[]) => {
    const sortedContests = [...contestHistory].sort(
      (a, b) => new Date(b.end_time).getTime() - new Date(a.end_time).getTime()
    ).reverse();

    setChartData({
      labels: sortedContests.map((contest) => {
        const date = new Date(contest.date);
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: '2-digit'
        });
      }),
      datasets: [
        {
          label: "Rating",
          data: sortedContests.map((contest) => contest.new_rating),
          borderColor: "#FFFFFF",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderWidth: 2,
          fill: true,
          tension: 0.5,
        },
      ],
    });
  };

  useEffect(() => {
    fetchPlatformStats(selectedPlatform);
  }, [selectedPlatform]);

  if (loading) {
    return (
      <div
        className="w-full h-full flex items-center justify-center theme-transition"
        style={{
          backgroundColor: theme.background + "99",
          color: theme.text,
        }}
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="w-full h-full flex items-center justify-center theme-transition"
        style={{
          backgroundColor: theme.background + "99",
          color: theme.text,
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div
      className="w-full h-full flex theme-transition"
      style={{
        backgroundColor: theme.background + "99",
      }}
    >
      <PlatformSelector
        selectedPlatform={selectedPlatform}
        onPlatformSelect={setSelectedPlatform}
      />
      {stats && (
        <div className="w-3/4 px-4 my-auto">
          <UserInfoHeader stats={stats} />
          <div className="flex gap-x-4 mt-4">
            <RatingChart data={chartData} options={chartOptions} />
            <StatsGrid stats={stats} />
          </div>
          <div className="mt-4">
            <ContestTable
              contests={stats.bestContests}
              platform={stats.platform}
              title="Best Performances"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManager;
