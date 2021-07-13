// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chart from '../../../Chart';
import moment from 'moment';
import s from './ModalChart.module.css';
import sprite from '../../../../sprite.svg';
// import projectOperations from '../../../../redux/projects/project-operations';

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

const ModalChart = ({ onCloseModal, nodeRef, sprintID, projectID }) => {
  const sprint = useSelector(getCurrentSprint);
  const task = useSelector(state => state.projects.task);
  const sprints = useSelector(state => state.projects.sprints);

  const allScheduledTime = task.reduce(
    (acc, task) => acc + task.scheduled_hours,
    0,
  );

  // Масив дат для оси X
  const dates = dateInterval(sprint.date_start, sprint.date_end);

  const duration = sprints.map(sprint =>
    Math.round(
      (Date.parse(sprint.date_end) - Date.parse(sprint.date_start)) /
        3600 /
        1000,
    ),
  );

  const totalDaly = sprints.map(
    sprint =>
      Math.round(
        (Date.parse(sprint.date_end) - Date.parse(sprint.date_start)) /
          3600 /
          1000,
      ) / 24,
  );

  // const dates = dateInterval(startDate, endDate);

  // const datesRange = (startDate_, endDate_) => {
  //   let startDate = new Date(startDate_ + ' 00:00:00 UTC');
  //   let endDate = new Date(endDate_ + ' 00:00:00 UTC');
  //   const options = {
  //     month: 'short',
  //     day: 'numeric',
  //   };

  //   while (startDate <= endDate) {
  //     console.log(`cille`);
  //     const locateUs = startDate.toLocaleString('en-US', options);
  //     dates.push(locateUs);
  //     startDate = new Date(
  //       Date.UTC(
  //         startDate.getFullYear(),
  //         startDate.getMonth(),
  //         startDate.getDate() + 1,
  //       ),
  //     );
  //   }
  // };
  // datesRange(startDate, endDate);

  const redLineArray = new Array(duration)
    .fill(allScheduledTime)
    .map((el, i, arr) =>
      i > 0 ? allScheduledTime - (allScheduledTime / arr.length) * i : el,
    )
    .concat([0]);

  const blueLineArray = new Array(duration)
    .fill(allScheduledTime)
    .map((el, i, arr) => {
      let temp = 0;
      for (let j = i; j >= 0; j--) {
        temp += Object.values(totalDaly[j])[0];
      }
      return arr[i] - temp;
    });
  console.table(`redline`, redLineArray);
  console.table('blue line', blueLineArray);
  console.log(`dates=${dates}`);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Current labor costs remaining',
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
        borderCapStyle: 'round',
      },
      {
        label: 'Planned labor costs remaining',
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
