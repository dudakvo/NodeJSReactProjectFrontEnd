import s from './GraphicBtn.module.scss';
import sprite from '../../sprite.svg';
import modalActions from '../../redux/modal/modal-actions';
import { useDispatch } from 'react-redux';

const GraphicBtn = () => {
  const dispatch = useDispatch();

  const handleShowChart = () => {
    dispatch(modalActions.isOpenModal());
    dispatch(modalActions.openModalChart());
  };

  return (
    <button type="button" onClick={handleShowChart} className={s.graphic_btn}>
      <div className={s.graphic_icon}>
        <svg className={s.graphic_icon_svg}>
          <use href={sprite + '#icon-analytics'} />
        </svg>
      </div>
    </button>
  );
};
export default GraphicBtn;
