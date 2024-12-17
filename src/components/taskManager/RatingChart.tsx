import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { useSettings } from '@/context/SettingsContext';

interface RatingChartProps {
  data: ChartData<'line'>;
  options: ChartOptions<'line'>;
}

const RatingChart = ({ data, options }: RatingChartProps) => {
  const { theme } = useSettings();
  
  return (
    <div className="rounded-lg p-4 w-3/4 theme-transition" style={{ 
      backgroundColor: theme.primary + 'cc'
    }}>
      <Line data={data} options={options} width={450} />
    </div>
  );
};

export default RatingChart; 