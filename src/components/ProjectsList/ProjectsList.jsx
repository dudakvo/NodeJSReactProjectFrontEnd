import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProjectsList.module.scss';
import sprite from '../../sprite.svg';
import routes from '../../routes';
import projectOperations from '../../redux/projects/project-operations';
import { projectsData } from '../../redux/projects/project-selectors';

const ProjectsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(projectOperations.fetchProjects());
  }, [dispatch]);

  const projects = useSelector(projectsData);

  const handleDeleteProject = (e, id) => {
    e.preventDefault();
    dispatch(projectOperations.deleteProject(id));

    console.log('delete project' + id);
  };
  return (
    <ul className={styles.list}>
      {projects?.map(item => (
        <li className={styles.item} key={item._id}>
          <Link
            className={styles.project}
            to={`${routes.projects}/${item._id}`}
          >
            <h3 className={styles.project_title}>{item.name}</h3>
            <p className={styles.project_text}>{item.description}</p>

            <button
              type="button"
              onClick={e => handleDeleteProject(e, item._id)}
            >
              <svg className={styles.button_plus}>
                <use href={sprite + '#icon-delete'} />
              </svg>
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ProjectsList;
