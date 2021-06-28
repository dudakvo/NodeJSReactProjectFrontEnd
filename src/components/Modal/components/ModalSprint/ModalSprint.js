import s from '../modal.module.scss';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './date-picker.scss';

const ModalWrapper = ({ myParams }) => {
  const [startDate, setStartDate] = useState('');

  return (
    <div className={s.backdrop}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <h2 className={s.title}>Creating a sprint</h2>
        </div>
        <div className={s.body}>
          <form className={s.formWrapper}>
            <div className={s.inputWrapper}>
              <input type="text" id="name" placeholder=" " />
              <label htmlFor="name">The name of the sprint</label>
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
          <button type="button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
