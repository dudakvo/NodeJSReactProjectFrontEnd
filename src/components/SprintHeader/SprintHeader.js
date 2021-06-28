import s from './SprintHeader.module.css'
import sprite from '../../sprite.svg';

const SprintHeader = () => {
    return (
    <>
        <div className = {s.wrapper}>
            <div className = {s.title_wraper}>
                    <h1 className = {s.name}>Sprint 1</h1>
                    <button >
                        <svg className = {s.change_btn}>
                            <use href={sprite + '#icon-pen'} />
                        </svg>
                    </button>
            </div>
            <div className = {s.add_task_wrapper}>
                <button type = 'button' className = {s.add_task_btn}>
                    <div className={s.button_plus}>
                        <svg className={s.plus}>
                            <use href={sprite + '#icon-plus'} />
                        </svg>
                    </div>
                </button>
                <p className = {s.add_task_title}>Створити задачу</p>
            </div>

        </div>
        <div className = {s.table_title_container}>
                <ul className = {s.table_title_list}>
                    <li className = {s.table_title_item}>Задача</li>
                    <li className = {s.table_title_item}>Заплановано годин</li>
                    <li className = {s.table_title_item}>Витрачено год / день</li>
                    <li className = {s.table_title_item}>Витрачено годин</li>
                </ul>
            </div>

    </>
    );
}

export default SprintHeader;
