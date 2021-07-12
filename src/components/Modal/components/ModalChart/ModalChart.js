import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chart from '../../../Chart';
import s from './ModalChart.module.css';
import sprite from '../../../../sprite.svg';
import projectOperations from '../../../../redux/projects/project-operations'

const ModalChart = ({ onCloseModal, nodeRef, sprintID, projectID }) => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(projectOperations.fetchTotalTasks(sprintID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sprintID, dispatch]);
  const task = useSelector(state => state.projects.task);
  // console.log(task[0].scheduled_hours)
  
useEffect(() => {
    dispatch(projectOperations.fetchSprints(projectID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectID, dispatch]);
  const sprints = useSelector(state => state.projects.sprints);
      console.log(sprints)
  
  const allScheduledTime = task.reduce((acc, task) => acc + task.scheduled_hours, 0);
  console.log(allScheduledTime)
  const duration = sprints.map(sprint=>Math.round((Date.parse(sprint.date_end) - Date.parse(sprint.date_start)) /
  3600 /1000,))
  const totalDay = sprints.map(sprint => Math.round((Date.parse(sprint.date_end) - Date.parse(sprint.date_start)) /
    3600 / 1000) / 24);

    
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
