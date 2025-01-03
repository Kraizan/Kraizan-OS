import { PlatformStats } from '@/types/contest';
import { getRankInfo } from '@/utils/rankInfo';
import { useSettings } from '@/context/SettingsContext';

interface UserInfoHeaderProps {
  stats: PlatformStats;
}

const UserInfoHeader = ({ stats }: UserInfoHeaderProps) => {
  const { theme } = useSettings();

  return (
    <div className="p-4 rounded-lg theme-transition" style={{ 
      backgroundColor: theme.primary + 'cc'
    }}>
      <div className="flex justify-between items-baseline">
        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: theme.text }}>{stats.handle}</h2>
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-bold" style={{ color: stats.color }}>
              {stats.rating}
            </span>
            <span className={`text-lg ${stats.ratingChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stats.ratingChange > 0 ? '+' : ''}{stats.ratingChange}
            </span>
            <span className="text-lg" style={{ color: stats.color }}>
              ({stats.rankName})
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm" style={{ color: theme.text + 'cc' }}>Max Rating</div>
          <div className="text-xl font-bold">
            <span style={{ color: getRankInfo(stats.maxRating, stats.platform).color }}>
              {stats.maxRating}
            </span>
            <span className="text-sm ml-2" style={{ color: theme.text }}>
              ({getRankInfo(stats.maxRating, stats.platform).rankName})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoHeader; 