import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ButtonAdd from '../ButtonAdd';

import styles from './Project.module.scss';
import sprite from '../../sprite.svg';

import { modalActions } from '../../redux/modal';
import projectOperations from '../../redux/projects/project-operations';
import { getProject } from '../../redux/projects/project-selectors';
import ButtonAddPeople from '../ButtonAddPeople';
import ProjectName from '../ProjectName';

const Project = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('rerender');
    dispatch(projectOperations.findProjectById(match.params.projectId));
  }, []);

  const project = useSelector(getProject);

  const handleAddSprint = () => {
    dispatch(modalActions.isOpenModal());
    dispatch(modalActions.openModalSprint());
    document.querySelector('body').classList.add('overflow__body');
  };
  const hendleDeleteSprint = e => {
    e.preventDefault();
    console.log('delete sprint');
  };

  return (
    <div className={styles.project_block}>
      <div className={styles.project_header}>
        <ProjectName name={project?.project.name} />
        <ButtonAdd text="Create sprint" onClick={handleAddSprint} />
      </div>
      <ButtonAddPeople />
      <ul className={styles.list}>
        {project?.sprints.sprints.map(item => (
          <li key={item.id}>
            <Link to={`${match.url}/${item.id}`} className={styles.sprint}>
              <h3 className={styles.title}>{item.sprint_name}</h3>
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
