import { useState, useRef } from 'react';
import s from '../modal.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './date-picker.scss';
import svg from '../../../../sprite.svg';

const ModalSprint = ({ myParams, onCloseModal, handleRef }) => {
  const [startDate, setStartDate] = useState('');
  const [activeCheckbox, setActiveCheckbox] = useState(false);

  const toggleCheckbox = e => {
    setActiveCheckbox(prev => !prev);
  };
  let toggleContainer = useRef(null);
  // useEffect(() => {
  //   handleRef(toggleContainer);
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className={s.wrapper} id="modal-sprint-wrapper">
      <div className={s.header}>
        <h2 className={s.title}>Creating a sprint</h2>
      </div>
      <div className={s.body} ref={toggleContainer}>
        <form className={s.formWrapper}>
          <div className={s.inputWrapper}>
            <input type="text" id="name" placeholder=" " />
            <label htmlFor="name">The name of the sprint</label>
          </div>
          <div className={s.checkboxWrapper}>
            <input
              className={s.checkbox}
              type="checkbox"
              id="past-day"
              onClick={toggleCheckbox}
            />
            {activeCheckbox ? (
              <svg className={s.checkboxIcon} onClick={toggleCheckbox}>
                <use href={`${svg}#checkbox-active`}></use>
              </svg>
            ) : (
              <svg className={s.checkboxIcon} onClick={toggleCheckbox}>
                <use href={`${svg}#checkbox-unactive`}></use>
              </svg>
            )}

            <span
              className={s.checkboxLabel}
              htmlFor="past-day"
              onClick={toggleCheckbox}
            >
              Past Day
            </span>
          </div>
          <div className={(s.inputWrapper, s.datePickerWrapper)}>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              // isClearable
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
        <button type="button">Ready</button>
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
