import { useState } from 'react';

// import sprite from '../../public/sprite.svg';
import TaskForm from '../components/TaskForm/TaskForm';

const TaskPage = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onCancel = () => setIsOpen(false);
  return (
    <>
      {isOpen && (
        <div className="modalOverlay">
          <div className="modalWindow">
            <h2 className="modalTitle">Створення задачі</h2>
            {/* <TaskForm onCancel={handelCancel} /> */}
            <TaskForm onCancel={onCancel} />

            {/* <div className="modalBody"></div> */}
            {/* <div className="modalFooter"></div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default TaskPage;
