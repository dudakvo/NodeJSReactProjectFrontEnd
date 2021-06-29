import ButtonBackspace from '../ButtonBackspace';
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

  return (
    <div className={styles.sidebar}>
      <ButtonBackspace text="Show Projects" onClick={HandleBackToProjects} />
      <ul className={styles.list}>
        {projects.map(item => (
          <li className={styles.item} key={item.id}>
            <div className={styles.square}></div>
            <p className={styles.title}>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
