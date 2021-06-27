import styles from './ProjectsList.module.css';
import sprite from '../../sprite.svg';

const ProjectsList = ({ projects }) => {
  return (
    <ul className={styles.list}>
      {projects.map(item => (
        <li className={styles.project} key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button type="button">
            <svg className={styles.button_plus}>
              <use href={sprite + '#icon-delete'} />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ProjectsList;
