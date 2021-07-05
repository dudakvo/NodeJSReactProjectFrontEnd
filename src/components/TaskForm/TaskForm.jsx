import { useState } from 'react';
import { createProject } from '../../services/project-api';

import './TaskForm.css';

const TaskForm = ({ onCancel }) => {
  const [task, setTask] = useState('');
  const [number, setNumber] = useState('');
  const [cssError, setCssError] = useState(['modalInputNumber']);
  const [cssErrorMessage, setErrorMessage] = useState(['errorMessage']);
  // const dispatch = useDispatch();

  const handleTaskChange = e => setTask(e.target.value);
  const handleNumberChange = e => {
    if (e.target.value > 0 || e.target.value === '') {
      setNumber(e.target.value);
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
    if (task === '' || number === '') return;
    createProject({ task, number });
    setTask('');
    setNumber('');
  };
  const handelCancel = () => {
    onCancel();
    setTask('');
    setNumber('');
    setCssError(['modalInputNumber']);
    setErrorMessage(['errorMessage']);
  };

  return (
    <form className="modalForm" onSubmit={handleSubmit}>
      <label className="modalLabelTask">
        <input
          className="modalInputTask"
          type="text"
          placeholder="Назва задачі"
          onChange={handleTaskChange}
          value={task}
        />
      </label>
      <label className="modalLabelNumber">
        <input
          className={cssError.join(' ')}
          type="text"
          placeholder="Заплановано годин"
          onChange={handleNumberChange}
          value={number}
        />
        <span className={cssErrorMessage.join(' ')}>
          will accept only numbers
        </span>
      </label>
      <div className="modalButtonBlock">
        <button className="modalButtonSubmit" type="submit">
          Готово
        </button>
        <button
          onClick={handelCancel}
          className="modalButtonReset"
          type="reset"
        >
          Відміна
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
