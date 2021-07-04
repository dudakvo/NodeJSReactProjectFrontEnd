import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return <Line data={data} height={600} width={1000} />;
};

export default Chart;
