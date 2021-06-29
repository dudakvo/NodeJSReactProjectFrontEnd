import ButtonBackspace from '../ButtonBackspace';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const HandleBackToProjects = () => {};

  return (
    <div className={styles.sidebar}>
      <ButtonBackspace text="Show Projects" onClick={HandleBackToProjects} />
    </div>
  );
};

export default Sidebar;
