import { NavLink } from 'react-router-dom';
import ButtonBackspace from '../ButtonBackspace';
import sprite from '../../sprite.svg';

import styles from './Sidebar.module.scss';
import routes from '../../routes';

const projects = [
  { id: 1, name: 'project1' },
  { id: 2, name: 'project2' },
  {
    id: 3,
    name: 'Дуже довга назва ',
  },
  { id: 4, name: 'project3' },
  {
    id: 5,
    name: 'Дуже довга назва ',
  },
  { id: 6, name: 'project3' },
];
const Sidebar = ({ history }) => {
  const HandleBackToProjects = () => {
    history.push(routes.projects);
  };

  const handleCreateProject = () => {
    console.log('create a project');
  };

  return (
    <div className={styles.sidebar}>
      <ButtonBackspace text="Show Projects" onClick={HandleBackToProjects} />
      <ul className={styles.list}>
        {projects.map(item => (
          <li className={styles.item} key={item.id}>
            <NavLink
              exact
              to={`${routes.projects}/${item.id}`}
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
