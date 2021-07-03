import styles from './ProjectsViewTitel.module.css';
import ButtonAdd from '../ButtonAdd';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../redux/modal';

const ProjectsViewTitel = () => {
  const dispatch = useDispatch();

  const handleAddProject = () => {
    dispatch(modalActions.isOpenModal());
    dispatch(modalActions.openModalProject());
  };

  return (
    <div className={styles.block_titel}>
      <h2>Projects</h2>
      <ButtonAdd onClick={handleAddProject} text="Create a project" />
    </div>
  );
};
export default ProjectsViewTitel;
