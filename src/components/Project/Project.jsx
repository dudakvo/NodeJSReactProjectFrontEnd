import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ButtonAdd from '../ButtonAdd';

import styles from './Project.module.scss';
import sprite from '../../sprite.svg';

import { modalActions } from '../../redux/modal';
import projectOperations from '../../redux/projects/project-operations';
import ButtonAddPeople from '../ButtonAddPeople';
import ProjectName from '../ProjectName';

const Project = ({ match }) => {
  const dispatch = useDispatch();
  const { projectId } = match.params;

  useEffect(() => {
    dispatch(projectOperations.fetchSprints(projectId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId, dispatch]);

   const sprints = useSelector(state => state.projects.sprints);

  const handleAddSprint = () => {
    dispatch(modalActions.isOpenModal());
    dispatch(modalActions.openModalSprint());
    document.querySelector('body').classList.add('overflow__body');
  };
  
  const hendleDeleteSprint = (e, id) => {
    e.preventDefault();
     dispatch(projectOperations.deleteSprint(id))
    console.log(`delete sprint id=${id}`);
  };

  return (
    <div className={styles.project_block}>
      <div className={styles.project_header}>
        <ProjectName projectId={projectId} />
        <ButtonAdd text="Create sprint" onClick={handleAddSprint} />
      </div>
      <ButtonAddPeople />
      <ul className={styles.list}>
        {sprints?.map(item => (
          <li key={item._id}>
            <Link to={`${match.url}/${item._id}`} className={styles.sprint}>
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
                onClick={e=>hendleDeleteSprint(e,item._id)}
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
