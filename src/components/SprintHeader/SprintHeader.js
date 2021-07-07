import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SprintHeader.module.css';
import sprite from '../../sprite.svg';
import ButtonAdd from '../ButtonAdd';
import { modalActions } from '../../redux/modal';
import { projectSelectors } from '../../redux/projects';

const SprintHeader = () => {
  const [changeSprintName, setChangeSprintName] = useState(false);
  // const [query, setQuery] = useState("");
  const [sprintName, setSprintName] = useState('hello');

  const currentPage = useSelector(projectSelectors.getCurrentPage);

  const dispatch = useDispatch();

  const handleShowInput = () => {
    setChangeSprintName(prevState => !prevState);
  };

  const handleChangeSprintName = e => {
    setSprintName(e.target.value);
  };

  const handleSearchTask = e => {
    //  setQuery(e.target.value);
  };

  const handleCreateTask = () => {
    // dispatch(modalActions.isOpenModal());
    dispatch(modalActions.openModalTask());
  };

  const getDate = () => {
    let date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    date = `${dd}.${mm}.${yyyy}`;
    return date;
  };

  return (
    <div>
      <div className={styles.task_page_data}>
        <div className={styles.pagination}>
          <button type="button" className={styles.button}>
            <svg className={styles.svg_arrow}>
              <use href={sprite + '#icon-arrow-left'} />
            </svg>
          </button>
          <span className={styles.pages}>
            <span className={styles.current_page}>{currentPage}</span> /{' '}
            {'backend'}
          </span>
          <button type="button" className={styles.button}>
            <svg className={styles.svg_arrow}>
              <use href={sprite + '#icon-arrow-right'} />
            </svg>
          </button>
        </div>
        <div className={styles.date}>{getDate()}</div>
        <div className={styles.search_input_wrapper}>
          <label className={styles.search_input_label}>
            <svg className={styles.svg_search}>
              <use href={sprite + '#icon-search'} />
            </svg>
            <input
              type="text"
              className={styles.search_input}
              onChange={handleSearchTask}
            />
          </label>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title_wrapper}>
          {changeSprintName ? (
            <input
              className={styles.input}
              value={sprintName}
              onChange={handleChangeSprintName}
            />
          ) : (
            <p className={styles.name}>{sprintName}</p>
          )}
          {changeSprintName ? (
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
        <ButtonAdd text="Create task" onClick={handleCreateTask} />
      </div>
    </div>
  );
};

export default SprintHeader;
