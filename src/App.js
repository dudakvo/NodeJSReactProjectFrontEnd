import React, { lazy, Suspense, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container';

import Header from './components/Header';

// import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import routes from './routes';

import Modal from './components/HOC/ModalHOC';

const ProjectsView = lazy(() =>
  import('./pages/ProjectsView' /* webpackChunkName: "ProjectsView" */),
);
const ProjectDetailsView = lazy(() =>
  import(
    './pages/ProjectDetailsView' /* webpackChunkName: "ProjectDetailsView" */
  ),
);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [showModalProject, setShowModalProject] = useState(false);
  const [showModalSprint, setShowModalSprint] = useState(false);
  const [showModalAddPeople, seShowModalAddPeople] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setShowModalProject(false);
    setShowModalSprint(false);
    seShowModalAddPeople(false);
  };

  const toggle = e => {
    const dataSet = Object.keys(e.target.dataset)[0];

    switch (dataSet) {
      case 'project':
        setShowModalProject(prev => !prev);
        setShowModalSprint(false);
        seShowModalAddPeople(false);
        break;

      case 'sprint':
        setShowModalSprint(prev => !prev);
        setShowModalProject(false);
        seShowModalAddPeople(false);
        break;

      case 'people':
        seShowModalAddPeople(prev => !prev);
        setShowModalProject(false);
        setShowModalSprint(false);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Container>
        <Header />

        {/* Для тестировочного открытия модалок, удалится */}
        <button
          data-project
          onClick={e => {
            toggle(e);
            handleOpenModal();
          }}
        >
          Проект
        </button>
        <button
          data-sprint
          onClick={e => {
            toggle(e);
            handleOpenModal();
          }}
        >
          Спринт
        </button>
        <button
          data-people
          onClick={e => {
            toggle(e);
            handleOpenModal();
          }}
        >
          Люди
        </button>
      </Container>
      {isOpen && (
        <Modal
          project={showModalProject}
          sprint={showModalSprint}
          people={showModalAddPeople}
          onCloseModal={handleCloseModal}
          isOpen={isOpen}
        />
      )}
      {/* {ReactDOM.createPortal(<Modal />, document.getElementById('portal'))} */}

      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          {/* <Route exact path={routes.register} component={RegisterPage} /> */}
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.projects} component={ProjectsView} />
          <Route path={routes.projectDetails} component={ProjectDetailsView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
