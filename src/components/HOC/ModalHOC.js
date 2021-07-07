import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ModalToggler from '../Modal/ModalToggler';
import { useParams } from 'react-router-dom';
import ModalProject from '../Modal/components/ModalProject';
import ModalSprint from '../Modal/components/ModalSprint';
import ModalChart from '../Modal/components/ModalChart';
import ModalAddPeople from '../Modal/components/ModalAddPeople';
import ModalTask from '../Modal/components/ModalTask';

import s from '../Modal/components/modal.module.scss';
import { projectOperations } from '../../redux/projects';
import { useDispatch, useSelector } from 'react-redux';
import { currentProject } from '../../redux/projects/project-selectors';

const ModalHOC = ({
  people,
  sprint,
  project,
  taks,
  chart,
  onCloseModal,
  isOpen,
  nodeRref,
}) => {
  const { sprintId } = useParams();

  const [activeCheckbox, setActiveCheckbox] = useState(false);

  const [projectName, seProjectName] = useState('');
  const [description, setDescription] = useState('');

  const [taskName, setTaskName] = useState('');
  const [scheduledHours, setScheduledHours] = useState('');

  const [addPeopleEmail, setAddPeopleEmail] = useState('');

  const [sprintName, setSprintName] = useState('');
  const [startDate, setStartDate] = useState('');

  const idProject = useSelector(currentProject);

  const dispatch = useDispatch();

  const emailArr = [];
  const message = 'You have not added any users yet';
  const ref = useRef(null);

  const handleInputs = e => {
    if (e.target.name === 'description') {
      setDescription(e.target.value);
    } else {
      seProjectName(e.target.value);
    }
  };

  const handleInputsTask = e => {
    if (e.target.name === 'description') {
      setScheduledHours(e.target.value);
    } else {
      setTaskName(e.target.value);
    }
  };

  const handleCreateProject = () => {
    dispatch(projectOperations.createProject(projectName, description));
    onCloseModal();
  };

  const handleAddPeople = () => {
    dispatch(projectOperations.addPeopleToProject(addPeopleEmail));
    onCloseModal();
  };

  const handleCreateTask = () => {
    dispatch(
      projectOperations.createSprint(taskName, scheduledHours, sprintId),
    );
    onCloseModal();
  };

  const handleCreateSprint = () => {
    dispatch(projectOperations.createSprint(sprintName, startDate, idProject));
    onCloseModal();
  };

  const onClickOutsideHandler = e => {
    if (ref.current) {
      if (isOpen && !ref.current.contains(e.target)) {
        onCloseModal();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('click', onClickOutsideHandler);
    return () => {
      window.removeEventListener('click', onClickOutsideHandler);
    };
    // eslint-disable-next-line
  }, []);

  return ReactDOM.createPortal(
    <ModalToggler
      togglePeopleModal={people}
      toggleSprintModal={sprint}
      toggleProjectModal={project}
      toggleChartModal={chart}
      toggleTaskModal={taks}
    >
      {({
        toggleProjectModal,
        toggleSprintModal,
        togglePeopleModal,
        toggleChartModal,
        toggleTaskModal,
      }) => (
        <>
          <div className={`${s.backdrop} backdrop`}>
            {toggleProjectModal && (
              <ModalProject
                handleInputs={handleInputs}
                onCloseModal={onCloseModal}
                handleRef={ref}
                nodeRef={nodeRref}
                valueName={projectName}
                valueDescription={description}
                onCreateProject={handleCreateProject}
              />
            )}
            {togglePeopleModal && (
              <ModalAddPeople
                emailList={emailArr}
                message={message}
                onCloseModal={onCloseModal}
                handleRef={ref}
                nodeRef={nodeRref}
                value={addPeopleEmail}
                setPeopleEmail={setAddPeopleEmail}
                handleAddPeople={handleAddPeople}
              />
            )}
            {toggleSprintModal && (
              <ModalSprint
                onCloseModal={onCloseModal}
                handleRef={ref}
                chechBoxStatus={activeCheckbox}
                handleCheckBox={setActiveCheckbox}
                startDate={startDate}
                setStartDate={setStartDate}
                nodeRef={nodeRref}
                handleCreateSprint={handleCreateSprint}
                handleGetName={setSprintName}
                value={sprintName}
              />
            )}
            {toggleTaskModal && (
              <ModalTask
                emailList={emailArr}
                message={message}
                onCloseModal={onCloseModal}
                handleRef={ref}
                nodeRef={nodeRref}
                valueName={taskName}
                taskScheduledHours={scheduledHours}
                setTaskInput={handleInputsTask}
                handleSubmitTask={handleCreateTask}
              />
            )}
            {toggleChartModal && (
              <ModalChart onCloseModal={onCloseModal} nodeRef={nodeRref} />
            )}
          </div>
        </>
      )}
    </ModalToggler>,
    document.getElementById('portal'),
  );
};

export default ModalHOC;

/* <CSSTransition
            in={showModalSprint}
            timeout={300}
            classNames="user__menu-modal"
            unmountOnExit
          >
            <ModalSprint />
          </CSSTransition>
          <CSSTransition
            in={showModalAddPeople}
            timeout={300}
            classNames="user__menu-modal"
            unmountOnExit
          >
            <ModalAddPeople listEmail={emailArr} mes={message} />
          </CSSTransition> */
