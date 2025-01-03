import { PlatformStats } from '@/types/contest';
import { useSettings } from '@/context/SettingsContext';

interface StatsGridProps {
  stats: PlatformStats;
}

const StatsGrid = ({ stats }: StatsGridProps) => {
  const { theme } = useSettings();

  return (
    <div className="w-1/4 flex flex-col gap-4">
      <div className="p-6 rounded-lg theme-transition" style={{ 
        backgroundColor: theme.primary + 'cc'
      }}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: theme.text + 'cc' }}>Total Contests</h3>
        <p className="text-2xl font-bold" style={{ color: theme.text }}>{stats.totalContests}</p>
      </div>
      <div className="p-6 rounded-lg theme-transition" style={{ 
        backgroundColor: theme.primary + 'cc'
      }}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: theme.text + 'cc' }}>Best Rank</h3>
        <p className="text-2xl font-bold" style={{ color: theme.text }}>#{stats.bestRank}</p>
      </div>
      <div className="p-6 rounded-lg theme-transition" style={{ 
        backgroundColor: theme.primary + 'cc'
      }}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: theme.text + 'cc' }}>Max Rating Increase</h3>
        <p className="text-2xl font-bold text-green-400">+{stats.maxRatingChange}</p>
      </div>
    </div>
  );
};

export default StatsGrid; 