import s from '../modal.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './date-picker.scss';
import svg from '../../../../sprite.svg';

const ModalSprint = ({
  onCloseModal,
  handleRef,
  chechBoxStatus,
  handleCheckBox,
  startDate,
  setStartDate,
  nodeRef,
  handleCreateSprint,
  handleGetName,
  value,
}) => {
  return (
    <div className={s.wrapper} ref={nodeRef}>
      <div className={s.header}>
        <h2 className={s.title}>Creating a sprint</h2>
      </div>
      <div className={s.body}>
        <form className={s.formWrapper}>
          <div className={s.inputWrapper}>
            <input
              type="text"
              id="name"
              placeholder=" "
              defaultValue={value}
              onChange={e => handleGetName(e.target.value)}
            />
            <label htmlFor="name">The name of the sprint</label>
          </div>
          <div className={s.checkboxWrapper}>
            <input className={s.checkbox} type="checkbox" id="past-day" />
            {chechBoxStatus ? (
              <svg
                className={s.checkboxIcon}
                onClick={() => {
                  handleCheckBox(prev => !prev);
                }}
              >
                <use href={`${svg}#checkbox-active`}></use>
              </svg>
            ) : (
              <svg
                className={s.checkboxIcon}
                onClick={() => {
                  handleCheckBox(prev => !prev);
                }}
              >
                <use href={`${svg}#checkbox-unactive`}></use>
              </svg>
            )}

            <span
              className={s.checkboxLabel}
              htmlFor="past-day"
              onClick={() => {
                handleCheckBox(prev => !prev);
              }}
            >
              Past Day
            </span>
          </div>
          <div className={(s.inputWrapper, s.datePickerWrapper)}>
            {/* <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              // isClearable
              placeholderText="End date"
            /> */}
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              placeholderText="End date"
            />
          </div>
          <div className={s.inputDurationWrapper}>
            <input className={s.inputDuration} type="text" placeholder=" " />
            <label>Duration</label>
          </div>
        </form>
      </div>
      <div className={s.footer}>
        <button type="button" onClick={handleCreateSprint}>
          Ready
        </button>
        <button type="button" onClick={onCloseModal}>
          Cancel
        </button>
      </div>
      <span className={s.iconCloseWrapper} onClick={onCloseModal}>
        <svg>
          <use href={`${svg}#icon-close-cross`}></use>
        </svg>
      </span>
    </div>
  );
};

export default ModalSprint;
