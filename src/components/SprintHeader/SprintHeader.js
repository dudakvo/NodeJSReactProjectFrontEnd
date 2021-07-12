import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SprintHeader.module.css';
import sprite from '../../sprite.svg';
import ButtonAdd from '../ButtonAdd';
import { modalActions } from '../../redux/modal';
import { projectSelectors } from '../../redux/projects';
import { projectOperations } from '../../redux/projects';

const SprintHeader = () => {
  const [changeSprintName, setChangeSprintName] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [name, setName] = useState('');

  const currentPage = useSelector(projectSelectors.getCurrentPage);
  const totalPages = useSelector(projectSelectors.getTotalPages);
  const sprintName = useSelector(projectSelectors.getSprintName);

  const { sprintId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectOperations.fetchSprint(sprintId));
    dispatch(projectOperations.fetchTotalTasks(sprintId));
  }, [sprintId, dispatch]);

  const handleShowInput = () => {
    setChangeSprintName(prevState => !prevState);
  };

  const handleChangeSprintName = e => {
    dispatch(projectOperations.updateSprintName(sprintId, name));
  };

  const handleSearchTask = e => {
    if (searchValue === '') {
      dispatch(projectOperations.findSprintById(sprintId, currentPage));
    }
    dispatch(projectOperations.searchTaskByName(searchValue));
    //  setQuery(e.target.value);
  };

  const handleCreateTask = () => {
    dispatch(modalActions.isOpenModal());
    dispatch(modalActions.openModalTask(sprintId));
  };

  const getDate = () => {
    let date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    date = `${dd}.${mm}.${yyyy}`;
    return date;
  };

  const handlePrevTaskPage = () => {
    if (currentPage === 1) {
      return;
    }
    dispatch(projectOperations.getPrevTaskPage(sprintId, currentPage));
  };

  const handleNextTaskPage = () => {
    if (currentPage === totalPages) {
      return;
    }
    dispatch(projectOperations.getNextTaskPage(sprintId, currentPage));
  };

  return (
    <div>
      <div className={styles.task_page_data}>
        <div className={styles.pagination}>
          <button
            type="button"
            className={styles.button}
            onClick={handlePrevTaskPage}
          >
            <svg className={styles.svg_arrow}>
              <use href={sprite + '#icon-arrow-left'} />
            </svg>
          </button>
          <span className={styles.pages}>
            <span className={styles.current_page}>{currentPage}</span> /{' '}
            {totalPages}
          </span>
          <button
            type="button"
            className={styles.button}
            onClick={handleNextTaskPage}
          >
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
              onChange={e => setSearchValue(e.target.value)}
              onBlur={handleSearchTask}
            />
          </label>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title_wrapper}>
          {changeSprintName ? (
            <input
              className={styles.input}
              defaultValue={sprintName}
              onChange={e => setName(e.target.value)}
              onBlur={handleChangeSprintName}
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
