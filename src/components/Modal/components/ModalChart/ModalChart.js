import { useSelector } from 'react-redux';

import Chart from '../../../Chart';
import moment from 'moment';
import s from './ModalChart.module.css';
import sprite from '../../../../sprite.svg';

import { getCurrentSprint } from '../../../../redux/projects/project-selectors';

function dateInterval(start, end) {
  start = moment(start);
  end = moment(end);
  const interval = [];
  for (var current = start; current <= end; current.add(1, 'd')) {
    interval.push(current.format('YYYY-MM-DD'));
  }
  return interval;
}

const ModalChart = ({ onCloseModal, nodeRef }) => {
  const sprint = useSelector(getCurrentSprint);
  const task = useSelector(state => state.projects.task);

  // Масив дат для оси X
  const dates = dateInterval(sprint.date_start, sprint.date_end);

  // Длительность в днях
  const totalSprintDays = dates.length;

  const allScheduledTime = task.reduce(
    (acc, task) => acc + task.scheduled_hours,
    0,
  );

  const allSpentTime = task.reduce(
    (acc, task) => acc + task.hours_spent_per_day * totalSprintDays,
    0,
  );

  const graphLine = (totalHoure, totalSprintDays) => {
    const ar = [totalHoure];
    const gradient = totalHoure / totalSprintDays;
    while (totalHoure > 0) {
      totalHoure -= gradient;
      ar.push(totalHoure);
    }
    return ar;
  };

  const redLineArray = graphLine(allScheduledTime, totalSprintDays);
  const blueLineArray = graphLine(allSpentTime, totalSprintDays);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Current labor costs remaining',
        data: blueLineArray,
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
        data: redLineArray,
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
      maintainAspectRatio: false,
      responsive: true,
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

  return (
    <div className={s.wrapper} ref={nodeRef}>
      <div className={s.header}>
        <h2>Burndown Chart (Calendar Team)</h2>
        <button className={s.button} type="button" onClick={onCloseModal}>
          <svg className={s.button_icon}>
            <use href={sprite + '#icon-close-cross'} />
          </svg>
        </button>
      </div>
      <div className={s.chartContainer}>
        <Chart data={data} />
      </div>
    </div>
  );
};

export default ModalChart;
