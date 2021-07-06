import { useEffect, useState } from 'react';
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import projectOperations from '../../redux/projects/project-operations';

import styles from './ProjectName.module.scss';
import sprite from '../../sprite.svg';

const ProjectName = ({ projectId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectOperations.findProjectById(projectId));
  }, [projectId, dispatch]);

  const project = useSelector(state => state.projects.project);

  const [changePojectName, setChangeProjectName] = useState(false);
  // const [projectName, setProjectName] = useState(project?.name);

  const handleShowInput = () => {
    setChangeProjectName(prevState => !prevState);
  };

  const handleChangeProjectName = e => {
    // setProjectName(e.target.value);
  };
  return (
    <div className={styles.project}>
      {changePojectName ? (
        <input
          className={styles.input}
          value={project?.project.name}
          onChange={handleChangeProjectName}
        />
      ) : (
        <p className={styles.project_title}>{project?.name}</p>
      )}
      {changePojectName ? (
        <button
          type="button"
          className={styles.button}
          onClick={handleShowInput}
        >
          <svg className={styles.svg}>
            <use href={sprite + '#icon-plus'} />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className={styles.button}
          onClick={handleShowInput}
        >
          <svg className={styles.svg}>
            <use href={sprite + '#icon-pen'} />
          </svg>
        </button>
      )}
    </div>
  );
};

export default memo(ProjectName);
