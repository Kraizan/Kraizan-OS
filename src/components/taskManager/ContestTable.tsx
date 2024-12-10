import { ContestResult } from '@/data/types/contest';
import { getRankInfo } from '@/utils/rankInfo';

interface ContestTableProps {
  contests: ContestResult[];
  platform: string;
  title: string;
}

const ContestTable = ({ contests, platform, title }: ContestTableProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <h3 className="text-lg font-semibold p-6 border-b">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contest</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contests.map((contest) => (
              <tr key={contest.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{contest.event}</td>
                <td className="px-6 py-4 text-sm font-medium text-blue-600">#{contest.place}</td>
                <td className="px-6 py-4 text-sm font-medium">
                  <span className={getRankInfo(contest.new_rating, platform).color}>
                    {contest.new_rating}
                  </span>
                </td>
                <td className={`px-6 py-4 text-sm ${contest.rating_change > 0 ? "text-green-500" : "text-red-500"}`}>
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