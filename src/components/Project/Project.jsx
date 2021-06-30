import { useState } from 'react';

import styles from './Project.module.scss';
import sprite from '../../sprite.svg';
import ButtonAdd from '../ButtonAdd';

const project = {
  id: 2,
  name: 'project2',
  description: 'Короткий опис проекту...',
  sprints: [
    {
      id: '1',
      sprint_name: 'Sprint Burndown Chart 1',
      date_start: '10 июля',
      date_end: '20 июля',
    },
    {
      id: '2',
      sprint_name: 'Sprint Burndown Chart 2',
      date_start: '10 июля',
      date_end: '20 июля',
    },
    {
      id: '3',
      sprint_name: 'Sprint Burndown Chart 3',
      date_start: '10 июля',
      date_end: '20 июля',
    },
    {
      id: '4',
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
  const handleAddSprint = () => {
    console.log('add sprint');
  };
  const hendleDeleteSprint = () => {
    console.log('delete sprint');
  };

  return (
    <div className={styles.project_block}>
      <div className={styles.project_header}>
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
        <ButtonAdd text="Create sprint" onClick={handleAddSprint} />
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

      <ul className={styles.list}>
        {project.sprints.map(item => (
          <li className={styles.sprint} key={item.id}>
            <h3 className={styles.titel}>{item.sprint_name}</h3>
            <div className={styles.time_block}>
              <p>Start date</p>
              <p>{item.date_start}</p>
            </div>
            <div className={styles.time_block}>
              <p>End date</p>
              <p>{item.date_end}</p>
            </div>
            <div className={styles.time_block}>
              <p>duration</p>
              <p>{item.date_start + item.date_end}</p>
            </div>
            <button
              type="button"
              onClick={hendleDeleteSprint}
              className={styles.button_delete}
            >
              <svg className={styles.svg}>
                <use href={sprite + '#icon-delete'} />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
