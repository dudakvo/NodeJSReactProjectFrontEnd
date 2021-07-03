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
  return (
    <div className={s.task_wrapper}>
      <ul className={s.task_list}>
        {tasks.map(item => (
          <li className={s.task_card} key={item.id}>
            <ul className={s.task_details}>
              <li className={s.task_details_item}>
                <p>{item.name}</p>
              </li>
              <li className={s.task_details_item}>
                <p className={s.hide_title}>Scheduled hours</p>
                <p>{item.planned}</p>
              </li>
              <li className={s.task_details_item}>
                <p className={s.hide_title}>Spent day</p>
                <input type="text" value="0" />
              </li>
              <li className={s.task_details_item}>
                <p className={s.hide_title}>Hours spent</p>
                <p>0</p>
              </li>
              <li className={s.task_details_item}>
                <button type="button" className={s.button_del_task}>
                  <svg className={s.button_delete}>
                    <use href={sprite + '#icon-delete'} />
                  </svg>
                </button>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SprintTaskList;
