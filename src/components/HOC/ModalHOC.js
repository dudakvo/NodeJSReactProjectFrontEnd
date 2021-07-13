import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ModalToggler from '../Modal/ModalToggler';
import ModalProject from '../Modal/components/ModalProject';
import ModalSprint from '../Modal/components/ModalSprint';
import ModalChart from '../Modal/components/ModalChart';
import ModalAddPeople from '../Modal/components/ModalAddPeople';
import ModalTask from '../Modal/components/ModalTask';
import s from '../Modal/components/modal.module.scss';
import { projectOperations } from '../../redux/projects';
import { useDispatch, useSelector } from 'react-redux';
import modalSelectors from '../../redux/modal/modal-selectors';
import { projectsData } from '../../redux/projects/project-selectors';

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
  const [emptyInputs, setEmptyInputs] = useState(false);

  const [activeCheckbox, setActiveCheckbox] = useState(false);

  const [projectName, seProjectName] = useState('');
  const [description, setDescription] = useState('');

  const [taskName, setTaskName] = useState('');
  const [scheduledHours, setScheduledHours] = useState('');

  const [addPeopleEmail, setAddPeopleEmail] = useState('');

  const [sprintName, setSprintName] = useState('');
  const [startDate, setStartDate] = useState('');

  const idProject = useSelector(modalSelectors.getIsOpenModalSprint);
  const idSprint = useSelector(modalSelectors.getIsOpenModalTask);
  const idProjectPeople = useSelector(modalSelectors.getIsOpenModalAddPeople);
  const peopleList = useSelector(projectsData);

  const idProjectAddPeople = useSelector(
    modalSelectors.getIsOpenModalAddPeople,
  );

  const dispatch = useDispatch();
  const emailArr = [];

  peopleList.forEach(el => {
    console.log(el._id, idProjectPeople);
    if (el._id === idProjectPeople) {
      el.participants.forEach(({ name }) => {
        emailArr.push(name);
      });
    }
  });

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
    if (projectName.trim() === '' || description.trim() === '') {
      setEmptyInputs(true);
      return;
    }
    setEmptyInputs(false);
    dispatch(projectOperations.createProject(projectName, description));
    onCloseModal();
  };

  const handleAddPeople = () => {
    if (addPeopleEmail.trim() === '') {
      setEmptyInputs(true);
      return;
    }
    setEmptyInputs(false);
    dispatch(
      projectOperations.addPeopleToProject(idProjectAddPeople, addPeopleEmail),
    );
  };

  const handleCreateTask = () => {
    if (taskName.trim() === '' || scheduledHours.trim() === '') {
      setEmptyInputs(true);
      return;
    }
    dispatch(projectOperations.createTask(taskName, scheduledHours, idSprint));
    onCloseModal();
  };

  const handleCreateSprint = () => {
    if (sprintName.trim() === '' || startDate === '') {
      setEmptyInputs(true);
      return;
    }
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
                emptyInputs={emptyInputs}
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
                emptyInputs={emptyInputs}
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
                emptyInputs={emptyInputs}
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
                emptyInputs={emptyInputs}
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
