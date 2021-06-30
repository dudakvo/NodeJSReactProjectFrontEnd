import { useState } from 'react';

import './TaskForm.css';

const TaskForm = ( {onCancel} ) => {
  const [task, setTask] = useState('');
  const [number, setNumber] = useState('');

  // const dispatch = useDispatch();

  const handleTaskChange = e => setTask(e.target.value);
  const handleNumberChange = e => setNumber(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (task === '') return;
    setTask('');
    setNumber('');
  };
  const handelCancel = () => onCancel();

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
          className="modalInputNumber"
          type="number"
          placeholder="Заплановано годин"
          onChange={handleNumberChange}
          value={number}
        />
      </label>
      <div className="modalButtonBlock">
        <button className="modalButtonSubmit" type="submit">
          Готово
        </button>
        <button onClick={handelCancel} className="modalButtonReset" type="reset">
          Відміна
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
