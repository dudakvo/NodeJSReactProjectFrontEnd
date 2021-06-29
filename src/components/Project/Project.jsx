import { useState } from 'react';

import styles from './Project.module.scss';
import sprite from '../../sprite.svg';

const project = {
  id: 2,
  name: 'project2',
  description: 'Короткий опис проекту...',
  sprints: [
    {
      sprint_name: 'Sprint Burndown Chart 1',
      date_start: '10 июля',
      date_end: '20 июля',
    },
    {
      sprint_name: 'Sprint Burndown Chart 2',
      date_start: '10 июля',
      date_end: '20 июля',
    },
    {
      sprint_name: 'Sprint Burndown Chart 3',
      date_start: '10 июля',
      date_end: '20 июля',
    },
    {
      sprint_name: 'Sprint Burndown Chart 4',
      date_start: '10 июля',
      date_end: '20 июля',
    },
  ],
};

const Project = () => {
  const [changePojectName, setChangeProjectName] = useState(false);
  const [projectName, setProjectName] = useState(project.name);

  const handleShowInput = () => {
    setChangeProjectName(prevState => !prevState);
  };

  const handleChangeProjectName = e => {
    setProjectName(e.target.value);
  };

  const handleAddPeople = () => {
    console.log('add peaple');
  };

  return (
    <>
      <div className={styles.project}>
        {changePojectName ? (
          <input
            className={styles.input}
            value={projectName}
            onChange={handleChangeProjectName}
          />
        ) : (
          <p className={styles.project_title}>{projectName}</p>
        )}
        {changePojectName ? (
          <button
            type="button"
            className={styles.button}
            onClick={handleShowInput}
          >
            <svg className={styles.svg}>
              <use href={sprite + '#icon-plus'} />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className={styles.button}
            onClick={handleShowInput}
          >
            <svg className={styles.svg}>
              <use href={sprite + '#icon-pen'} />
            </svg>
          </button>
        )}
      </div>

      <button
        onClick={handleAddPeople}
        className={styles.button_add_people}
        type="button"
      >
        <svg className={styles.svg}>
          <use href={sprite + '#icon-add-people'} />
        </svg>
        <p className={styles.text}>add people</p>
      </button>

      <ul>
        {project.sprints.map(item => (
          <li>
            <h3>{item.sprint_name}</h3>
            <p>Start date</p>
            <p>{item.date_start}</p>
            <p>End date</p>
            <p>{item.date_end}</p>
            <p>duration</p>
            <p>{item.date_start + item.date_end}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Project;
