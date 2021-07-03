import s from './GraphicBtn.module.scss'
import sprite from '../../sprite.svg';

const GraphicBtn = ({onClick}) => {
    return (
        <button type = 'button'
        onClick={onClick} 
        className = {s.graphic_btn}
        >
        <div className={s.graphic_icon}>
            <svg className={s.graphic_icon_svg}>
                <use href={sprite + '#icon-analytics'} />
            </svg>
        </div>
    </button>
    )
}
export default GraphicBtn;