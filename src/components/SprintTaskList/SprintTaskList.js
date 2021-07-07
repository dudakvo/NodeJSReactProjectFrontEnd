import { useState } from 'react';
import sprite from '../../sprite.svg';
import s from './SprintTaskList.module.scss';

const tasks = [
  {
    id: 1,
    name: 'task 1',
    planned: 3,
  },
  {
    id: 2,
    name: 'task 2',
    planned: 5,
  },
  {
    id: 3,
    name: 'task 3',
    planned: 8,
  },
];

const SprintTaskList = () => {
  const [spentHour, setSpentHour] = useState(0);
  // const [taskId, setTaskId]= useState("")

  const handleChangeHour = e => {
    setSpentHour(e.target.value);
    // setTaskId()
  };;

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
              // onChange={handleSearchTask}
            />
            <svg className={s.svg_search}>
              <use href={sprite + '#icon-search'} />
            </svg>
          </label>
        </div>
      </div>
      <ul className={s.task_list}>
        {tasks.map(item => (
          <li className={s.task_card} key={item.id}>
            <h3 className={s.task_name}>{item.name}</h3>
            <div className={s.task_description}>
              <p className={s.task_table}>Scheduled hours</p>
              <p className={s.task_hours}>{item.planned}</p>
            </div>
            <div className={s.task_description}>
              <p className={s.task_table}>Spent hour / day</p>
              <input
                type="text"
                value={spentHour}
                onChange={handleChangeHour}
              />
            </div>
            <div className={s.task_description}>
              <p className={s.task_table}>Hours spent</p>
              <p className={s.task_hours}>0</p>
            </div>
            <button type="button" className={s.button_del_task}>
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
