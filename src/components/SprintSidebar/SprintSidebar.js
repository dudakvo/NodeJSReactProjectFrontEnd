import s from './SprintSidebar.module.css';
import sprite from '../../sprite.svg';

const SprintSidebar = () => {
    return (
        <div className = {s.sidebar_wrapper}>
            {/* <div className = {s.back_wrapper}>
                <button type = 'button' className={s.btn_show_sprint}>
                    <div className={s.button_back}>
                        <svg className={s.icon_back}>
                            <use href={sprite + '#icon-arrow'} />
                        </svg>
                    </div>
                </button>
                <p className = {s.add_sprint_title}>Show sprints</p>

            </div> */}
            <ul className = {s.sidebar_list}>
                <li className = {s.sidebar_item}>

                </li>
            </ul>
            <div>
                <button type = 'button' className = {s.add_sprint_btn}>
                    <div className={s.button_plus}>
                        <svg className={s.icon_plus}>
                            <use href={sprite + '#icon-plus'} />
                        </svg>
                    </div>
                    <p className = {s.add_sprint_title}>Create a sprint</p>
                </button>
                
            </div> 
        </div>
    )
}
export default SprintSidebar;