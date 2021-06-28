import s from './SprintSadebar.module.css';
import sprite from '../../sprite.svg';

const SprintSadebar = () => {
    return (
        <div className = {s.sidebar_wrapper}>
            <div className = {s.back_wrapper}>
                <button type = 'button' className={s.button_back}>
                    <div className={s.button_back}>
                        <svg className={s.icon_back}>
                            <use href={sprite + '#icon-arrow'} />
                        </svg>
                    </div>
                </button>
                <p className = {s.add_sprint_title}>Показати проект</p>

            </div>
            <ul className = {s.sidebar_list}>
                <li className = {s.sidebar_item}>

                </li>
            </ul>
            <div>
                <button type = 'button' className = {s.add_sprint_btn}>
                    <div className={s.button_plus}>
                        <svg className={s.plus}>
                            <use href={sprite + '#icon-plus'} />
                        </svg>
                    </div>
                </button>
                <p className = {s.add_sprint_title}>Створити спринт</p>
            </div>
        </div>
    )
}
export default SprintSadebar;