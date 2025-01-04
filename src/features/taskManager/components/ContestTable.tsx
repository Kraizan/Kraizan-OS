import { useSettings } from '@/context/SettingsContext';
import { ContestResult } from '@/types/contest';
import { getRankInfo } from '@/utils/rankInfo';
import { ContestTableProps } from '@/types/contest'

const ContestTable = ({ contests, platform, title }: ContestTableProps) => {
  const { theme } = useSettings();
  return (
    <div className="rounded-lg overflow-hidden theme-transition" style={{ 
      backgroundColor: theme.primary + 'cc',
      color: '#FFFFFF'
    }}>
      <h3 className="text-lg font-semibold p-6 border-b" style={{
        borderColor: theme.secondary + '40'
      }}>{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ backgroundColor: theme.primary + 'ee' }}>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase opacity-90">Contest</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase opacity-90">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase opacity-90">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase opacity-90">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: theme.secondary + '40' }}>
            {contests.map((contest) => (
              <tr 
                key={contest.id} 
                className="hover:bg-opacity-50 transition-colors"
                style={{ backgroundColor: theme.primary + '99' }}
              >
                <td className="px-6 py-4 text-sm">{contest.event}</td>
                <td className="px-6 py-4 text-sm font-medium opacity-90">#{contest.place}</td>
                <td className="px-6 py-4 text-sm font-medium">
                  <span style={{ color: getRankInfo(contest.new_rating, platform).color }}>
                    {contest.new_rating}
                  </span>
                </td>
                <td className={`px-6 py-4 text-sm font-medium ${
                  contest.rating_change > 0 ? "text-green-400" : "text-red-400"
                }`}>
                  {contest.rating_change > 0 ? "+" : ""}{contest.rating_change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContestTable; 