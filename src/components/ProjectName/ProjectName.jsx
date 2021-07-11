import { useEffect, useState } from 'react';
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import projectOperations from '../../redux/projects/project-operations';

import styles from './ProjectName.module.scss';
import sprite from '../../sprite.svg';

const ProjectName = () => {
  const dispatch = useDispatch();

  const { projectId } = useParams();

  useEffect(() => {
    dispatch(projectOperations.findProjectById(projectId));
  }, [projectId, dispatch]);

  const project = useSelector(state => state.projects.project);

  const [changePojectName, setChangeProjectName] = useState(false);
  const [projectName, setProjectName] = useState('');

  const handleShowInput = () => {
    setChangeProjectName(prevState => !prevState);
    if (changePojectName) {
      dispatch(projectOperations.updateProjectName(projectId, projectName));
    }
  };

  const handleChangeProjectName = e => {
    setProjectName(e.target.value);
  };

  // const submitChangePrjectName = () => {};
  return (
    <div className={styles.project}>
      {changePojectName ? (
        <>
          <input
            className={styles.input}
            value={projectName}
            onChange={handleChangeProjectName}
          />
          <button
            type="button"
            className={styles.button}
            onClick={handleShowInput}
          >
            <svg className={styles.svg}>
              <use href={sprite + '#icon-plus'} />
            </svg>
          </button>
        </>
      ) : (
        <>
          <p className={styles.project_title}>{project?.name}</p>
          <button
            type="button"
            className={styles.button}
            onClick={handleShowInput}
          >
            <svg className={styles.svg}>
              <use href={sprite + '#icon-pen'} />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default memo(ProjectName);
