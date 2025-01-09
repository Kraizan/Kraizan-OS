import { Line } from 'react-chartjs-2';
import { useSettings } from '@/context/SettingsContext';
import { RatingChartProps } from '@/types/contest';

const RatingChart = ({ data, options }: RatingChartProps) => {
  const { theme } = useSettings();
  
  return (
    <div className="rounded-lg p-4 w-3/4 theme-transition" style={{ 
      backgroundColor: theme.primary + 'cc'
    }}>
      <Line data={data as any} options={options as any} width={450} />
    </div>
  );
};

export default RatingChart;