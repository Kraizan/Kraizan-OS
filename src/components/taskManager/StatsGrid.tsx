import { PlatformStats } from '@/data/types/contest';

interface StatsGridProps {
  stats: PlatformStats;
}

const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="w-1/4 flex flex-col gap-4">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Total Contests</h3>
        <p className="text-2xl font-bold text-gray-800">{stats.totalContests}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Best Rank</h3>
        <p className="text-2xl font-bold text-gray-800">#{stats.bestRank}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Max Rating Increase</h3>
        <p className="text-2xl font-bold text-green-500">+{stats.maxRatingChange}</p>
      </div>
    </div>
  );
};

export default StatsGrid; 