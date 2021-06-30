import styles from './ProjectsList.module.scss';
import sprite from '../../sprite.svg';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const projects = [
  { id: 1, name: 'project1', description: 'Короткий опис проекту...' },
  { id: 2, name: 'project2', description: 'Короткий опис проекту...' },
  {
    id: 3,
    name: 'Дуже довга назва проекту',
    description: 'Короткий опис проекту...',
  },
  { id: 4, name: 'project3', description: 'Короткий опис проекту...' },
  {
    id: 5,
    name: 'Дуже довга назва проекту',
    description: 'Короткий опис проекту...',
  },
  { id: 6, name: 'project3', description: 'Короткий опис проекту...' },
];

const ProjectsList = () => {
  const handleDeleteProject = e => {
    if (
      e.target.tagName === 'BUTTON' ||
      e.target.tagName === 'svg' ||
      e.target.tagName === 'use'
    ) {
      console.log('delete project');
    }
  };
  return (
    <ul className={styles.list}>
      {projects.map(item => (
        <li className={styles.item} key={item.id}>
          <Link className={styles.project} to={`${routes.projects}${item.id}`}>
            <h3 className={styles.project_title}>{item.name}</h3>
            <p className={styles.project_text}>{item.description}</p>

            <button type="button" onClick={handleDeleteProject}>
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
