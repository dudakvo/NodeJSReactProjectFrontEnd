import s from './SprintHeader.module.css';
import sprite from '../../sprite.svg';

const SprintHeader = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.title_wraper}>
          <h1 className={s.name}>Sprint 1</h1>
          <button className={s.change_btn}>
            <div className={s.change_btn_wrap}>
              <svg className={s.change_btn_icon}>
                <use href={sprite + '#icon-pen'} />
              </svg>
            </div>
          </button>
        </div>
        <div className={s.add_task_wrapper}>
          <button type="button" className={s.add_task_btn}>
            <div className={s.button_plus}>
              <svg className={s.icon_plus}>
                <use href={sprite + '#icon-plus'} />
              </svg>
            </div>
          </button>
          <p className={s.add_task_title}>Create a task</p>
        </div>
      </div>
      <div className={s.table_title_container}>
        <ul className={s.table_title_list}>
          <li className={s.table_title_item}>Task</li>
          <li className={s.table_title_item}>Scheduled hours</li>
          <li className={s.table_title_item}>Spent hour / day</li>
          <li className={s.table_title_item}>Hours spent</li>
        </ul>
      </div>
    </>
  );
};

export default SprintHeader;
