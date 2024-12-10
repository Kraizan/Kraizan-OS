import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface RatingChartProps {
  data: ChartData<'line'>;
  options: ChartOptions<'line'>;
}

const RatingChart = ({ data, options }: RatingChartProps) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg w-3/4">
      <Line data={data} options={options} width={450} />
    </div>
  );
};

export default RatingChart; 