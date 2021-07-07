import { useState } from 'react';
import { createTask } from '../../services/project-api';
import { useDispatch } from 'react-redux';

import './TaskForm.css';
import { modalActions } from '../../redux/modal';

const TaskForm = ({ onCancel }) => {
  const [task, setTask] = useState('');
  const [scheduledHours, setScheduledHours] = useState('');
  const [cssError, setCssError] = useState(['modalInputNumber']);
  const [cssErrorMessage, setErrorMessage] = useState(['errorMessage']);

  const dispatch = useDispatch();

  const handleTaskChange = e => setTask(e.target.value);
  const handleNumberChange = e => {
    if (e.target.value > 0 || e.target.value === '') {
      setScheduledHours(e.target.value);
      setCssError(['modalInputNumber']);
      setErrorMessage(['errorMessage']);
    } else {
      setCssError(['modalInputNumber', 'modalInputNumberError']);
      setErrorMessage(['errorMessage', 'isActiveErrorMessage']);
    }
  };
  // useEffect(() => {
  //   setModalOpen(true);
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (task === '' || scheduledHours === '') return;
    createTask({ task, scheduledHours });
    dispatch(modalActions.closeModalTask());
    setTask('');
    setScheduledHours('');
  };
  const handelCancel = () => {
    onCancel();
    setTask('');
    setScheduledHours('');
    setCssError(['modalInputNumber']);
    setErrorMessage(['errorMessage']);
  };

  return (
    <form className="modalForm" onSubmit={handleSubmit}>
      <label className="modalLabelTask">
        <input
          className="modalInputTask"
          type="text"
          placeholder="Task name"
          onChange={handleTaskChange}
          value={task}
        />
      </label>
      <label className="modalLabelNumber">
        <input
          className={cssError.join(' ')}
          type="text"
          placeholder="Scheduled hours"
          onChange={handleNumberChange}
          value={scheduledHours}
        />
        <span className={cssErrorMessage.join(' ')}>
          will accept only numbers
        </span>
      </label>
      <div className="modalButtonBlock">
        <button className="modalButtonSubmit" type="submit">
          Ready
        </button>
        <button
          onClick={handelCancel}
          className="modalButtonReset"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
