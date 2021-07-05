import { useState } from 'react';
import styles from './ProjectName.module.scss';

import sprite from '../../sprite.svg';

const ProjectName = ({ name }) => {
  const [changePojectName, setChangeProjectName] = useState(false);

  const [projectName, setProjectName] = useState(name);

  const handleShowInput = () => {
    setChangeProjectName(prevState => !prevState);
  };

  const handleChangeProjectName = e => {
    setProjectName(e.target.value);
  };
  return (
    <div className={styles.project}>
      {changePojectName ? (
        <input
          className={styles.input}
          value={projectName}
          onChange={handleChangeProjectName}
        />
      ) : (
        <p className={styles.project_title}>{projectName}</p>
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

export default ProjectName;
