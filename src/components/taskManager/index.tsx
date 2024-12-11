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
import PlatformSelector from "./PlatformSelector";
import UserInfoHeader from "./UserInfoHeader";
import StatsGrid from "./StatsGrid";
import RatingChart from "./RatingChart";
import ContestTable from "./ContestTable";
import { getCachedData, setCachedData } from '@/utils/cache';

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
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [
      {
        label: "Rating",
        data: [],
        borderColor: "#3498db",
        backgroundColor: "rgba(52, 152, 219, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  });
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Rating History",
        color: "#2d3748",
        font: {
          size: 16,
          weight: "bold" as const,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };

  const fetchPlatformStats = async (platformName: string) => {
    setLoading(true);
    setError(null);
    setStats(null);

    try {
      const platform = platforms.find(p => p.name === platformName);
      if (!platform) throw new Error('Platform not found');

      // Try to get cached data first
      const cacheKey = `platform_stats_${platform.accountId}`;
      const cachedStats = getCachedData<PlatformStats>(cacheKey);
      
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
      setError('Failed to fetch data. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateChartData = (contestHistory: ApiResponse['objects']) => {
    setChartData({
      labels: contestHistory.slice().reverse().map(c => new Date(c.date).toLocaleDateString()),
      datasets: [
        {
          label: 'Rating',
          data: contestHistory.slice().reverse().map(c => c.new_rating),
          borderColor: '#3498db',
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          fill: true,
          tension: 0.4,
        }
      ]
    });
  };

  useEffect(() => {
    fetchPlatformStats(selectedPlatform);
  }, [selectedPlatform]);

  return (
    <div className="w-full h-full flex bg-gray-100">
      <PlatformSelector
        selectedPlatform={selectedPlatform}
        onPlatformSelect={setSelectedPlatform}
      />

      <div className="w-3/4 p-6">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
            {error}
          </div>
        ) : stats ? (
          <div className="space-y-4">
            <UserInfoHeader stats={stats} />
            <div className="flex gap-x-4">
              <RatingChart data={chartData} options={chartOptions} />
              <StatsGrid stats={stats} />
            </div>
            <ContestTable
              contests={stats.bestContests}
              platform={stats.platform}
              title="Best Performances"
            />
          </div>
        ) : (
          <div className="text-center text-gray-500">
            Select a platform to view stats.
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
