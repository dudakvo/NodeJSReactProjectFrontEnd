import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ModalToggler from '../Modal/ModalToggler';
import ModalProject from '../Modal/components/ModalProject';
import ModalSprint from '../Modal/components/ModalSprint';
import ModalAddPeople from '../Modal/components/ModalAddPeople';
import s from '../Modal/components/modal.module.scss';
import { projectOperations } from '../../redux/projects';
import { useDispatch, useSelector } from 'react-redux';
import { currentProject } from '../../redux/projects/project-selectors';

const ModalHOC = ({
  people,
  sprint,
  project,
  onCloseModal,
  isOpen,
  nodeRref,
}) => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);

  const [projectName, seProjectName] = useState('');
  const [description, setDescription] = useState('');

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

  const handleCreateProject = () => {
    dispatch(projectOperations.createProject(projectName, description));
    onCloseModal();
  };

  const handleAddPeople = () => {
    dispatch(projectOperations.addPeopleToProject(addPeopleEmail));
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
    >
      {({ toggleProjectModal, toggleSprintModal, togglePeopleModal }) => (
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
