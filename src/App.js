import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container';
import TaskPage from './pages/TaskPage';
import ModalTaskPages from './components/ModalTaskPages/ModalTaskPages';
import Header from './components/Header';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import authOperations from './redux/auth/auth-operations';
import routes from './routes';

const ProjectsView = lazy(() =>
  import('./pages/ProjectsView' /* webpackChunkName: "ProjectsView" */),
);
const ProjectDetailsView = lazy(() =>
  import(
    './pages/ProjectDetailsView' /* webpackChunkName: "ProjectDetailsView" */
  ),
);
const SprintView = lazy(() =>
  import('./pages/SprintView' /* webpackChunkName: "SprintView" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route exact path={routes.register} component={RegisterPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.projects} component={ProjectsView} />
          <Route
            exact
            path={routes.projectDetails}
            component={ProjectDetailsView}
          />
          <Route exact path={routes.sprint} component={SprintView} />
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
