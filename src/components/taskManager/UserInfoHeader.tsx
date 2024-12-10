import { PlatformStats } from '@/data/types/contest';
import { getRankInfo } from '@/utils/rankInfo';

interface UserInfoHeaderProps {
  stats: PlatformStats;
}

const UserInfoHeader = ({ stats }: UserInfoHeaderProps) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <div className="flex justify-between items-baseline">
        <div>
          <h2 className="text-2xl font-bold mb-2">{stats.handle}</h2>
          <div className="flex items-baseline space-x-2">
            <span className={`text-4xl font-bold ${stats.color}`}>
              {stats.rating}
            </span>
            <span className={`text-lg ${stats.ratingChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {stats.ratingChange > 0 ? '+' : ''}{stats.ratingChange}
            </span>
            <span className={`text-lg ${stats.color}`}>
              ({stats.rankName})
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Max Rating</div>
          <div className={`text-xl font-bold ${getRankInfo(stats.maxRating, stats.platform).color}`}>
            {stats.maxRating}
            <span className="text-sm ml-2">
              ({getRankInfo(stats.maxRating, stats.platform).rankName})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoHeader; 