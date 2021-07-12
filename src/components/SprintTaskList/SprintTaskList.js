import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { projectOperations } from '../../redux/projects';
import { projectSelectors } from '../../redux/projects';
import sprite from '../../sprite.svg';
import s from './SprintTaskList.module.scss';

const SprintTaskList = () => {
  const [hourValue, setHourValue] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [taskId, setTaskId] = useState('');

  const tasks = useSelector(projectSelectors.getTasks); // получаем масив задач через селектор
  const currentPage = useSelector(projectSelectors.getCurrentPage);

  const dispatch = useDispatch();

  const { sprintId } = useParams();

  useEffect(
    () => dispatch(projectOperations.findSprintById(sprintId, currentPage)),
    [sprintId, dispatch, currentPage],
  );

  const onDeleteTask = id => {
    dispatch(projectOperations.deleteTask(id));
  };

  const validateHour = value => {
    if (value > 0 && !isNaN(value)) {
      return true;
    } else return false;
  };

  const handleChangeHour = id => {
    if (!validateHour(hourValue)) {
      return;
    }
    dispatch(projectOperations.updateTaskHours(id, hourValue));
  };

  const handleSearchTask = e => {
    if (searchValue === '') {
      dispatch(projectOperations.findSprintById(sprintId, currentPage));
    }
    dispatch(projectOperations.searchTaskByName(searchValue));
  };

  return (
    <div className={s.task_wrapper}>
      <div className={s.task_naming}>
        <p className={s.naming_item}>Task</p>
        <p className={s.naming_item}>Scheduled hours</p>
        <p className={s.naming_item}>
          Spent <br></br> hour / day
        </p>
        <p className={s.naming_item}>Hours spent</p>
        <div className={s.search_input_wrapper}>
          <label className={s.search_input_label}>
            <input
              type="text"
              className={s.search_input}
              onChange={e => setSearchValue(e.target.value)}
              onBlur={handleSearchTask}
            />
            <svg className={s.svg_search}>
              <use href={sprite + '#icon-search'} />
            </svg>
          </label>
        </div>
      </div>
      <ul className={s.task_list}>
        {tasks.map(task => (
          <li className={s.task_card} key={task._id}>
            <h3 className={s.task_name}>{task.task_name}</h3>
            <div className={s.task_description}>
              <p className={s.task_table}>Scheduled hours</p>
              <p className={s.task_hours}>{task.scheduled_hours}</p>
            </div>
            <div className={s.task_description}>
              <p className={s.task_table}>Spent hour / day</p>
              <input
                type="text"
                defaultValue={task.hours_spent_per_day}
                onChange={e => {
                  setHourValue(e.target.value);
                  setTaskId(task._id);
                }}
                onBlur={e => handleChangeHour(taskId)}
              />
            </div>
            <div className={s.task_description}>
              <p className={s.task_table}>Hours spent</p>
              <p className={s.task_hours}>0</p>
            </div>
            <button
              type="button"
              className={s.button_del_task}
              onClick={e => onDeleteTask(task._id)}
            >
              <svg className={s.button_delete}>
                <use href={sprite + '#icon-delete'} />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SprintTaskList;
