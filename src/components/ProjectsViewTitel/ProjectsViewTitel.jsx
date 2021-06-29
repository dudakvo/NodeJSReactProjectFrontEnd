import styles from './ProjectsViewTitel.module.css';

import ButtonAdd from '../ButtonAdd';

const ProjectsViewTitel = () => {
  const handleAddProject = () => {
    console.log('add contact');
  };

  return (
    <div className={styles.block_titel}>
      <h2>Projects</h2>
      <ButtonAdd onClick={handleAddProject} text="Create project" />
    </div>
  );
};
export default ProjectsViewTitel;
