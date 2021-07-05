import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonBackspace from '../ButtonBackspace';
import sprite from '../../sprite.svg';

import styles from './Sidebar.module.scss';
import routes from '../../routes';

import { modalActions } from '../../redux/modal';
import projectOperations from '../../redux/projects/project-operations';
import { projectsData } from '../../redux/projects/project-selectors';

const Sidebar = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectOperations.fetchProjects());
  }, [dispatch]);

  const projects = useSelector(projectsData);

  const HandleBackToProjects = () => {
    history.push(routes.projects);
  };

  const handleCreateProject = () => {
    dispatch(modalActions.isOpenModal());
    dispatch(modalActions.openModalProject());
  };

  return (
    <div className={styles.sidebar}>
      <ButtonBackspace text="Show Projects" onClick={HandleBackToProjects} />
      <ul className={styles.list}>
        {projects.map(item => (
          <li className={styles.item} key={item._id}>
            <NavLink
              exact
              to={`${routes.projects}/${item._id}/sprints`}
              className={styles.link}
              activeClassName={styles.isActive}
            >
              <div className={styles.square}></div>
              <p className={styles.title}>{item.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={styles.button_add}
        onClick={handleCreateProject}
      >
        <div className={styles.button_plus}>
          <svg className={styles.plus}>
            <use href={sprite + '#icon-plus'} />
          </svg>
        </div>

        <p className={styles.button_text}>Create a project</p>
      </button>
    </div>
  );
};

export default Sidebar;
