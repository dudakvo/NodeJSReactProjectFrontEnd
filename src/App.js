import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container';
import TaskPage from './pages/TaskPage';
import ModalTaskPages from './components/ModalTaskPages/ModalTaskPages';
import Header from './components/Header';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import routes from './routes';

const ProjectsView = lazy(() =>
  import('./pages/ProjectsView' /* webpackChunkName: "ProjectsView" */),
);
const ProjectDetailsView = lazy(() =>
  import(
    './pages/ProjectDetailsView' /* webpackChunkName: "ProjectDetailsView" */
  ),
);

function App() {
  // const isOpen = Boolean(1);
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route exact path={routes.register} component={RegisterPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.projects} component={ProjectsView} />
          <Route path={routes.projectDetails} component={ProjectDetailsView} />
        </Switch>
      </Suspense>

      <Container>
        <ModalTaskPages>
          <TaskPage />
        </ModalTaskPages>
      </Container>
    </>
  );
}

export default App;
