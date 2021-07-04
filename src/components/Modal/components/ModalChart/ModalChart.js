import { useRef, useEffect } from 'react';
import Chart from '../../../Chart';
import s from './ModalChart.module.css';

const data = {
  labels: [
    '22 July',
    '23 July',
    '24 July',
    '25 July',
    '26 July',
    '27 July',
    '28 July',
  ],
  datasets: [
    {
      label: 'Current labor costs remaining',
      data: [20, 17, 14, 12, 6, 2, 0],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
      borderCapStyle: 'round',
    },
    {
      label: 'Planned labor costs remaining',
      data: [20, 16.66, 13.33, 10, 6.66, 3.33, 0],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
  options: {
    plugins: {
      title: {
        display: true,
        text: 'hello',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  },
};

const ModalChart = ({ onCloseModal, handleRef }) => {
  let toggleContainer = useRef(null);
  useEffect(() => {
    handleRef(toggleContainer);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.wrapper} ref={toggleContainer}>
      <Chart data={data} />
    </div>
  );
};

export default ModalChart;
