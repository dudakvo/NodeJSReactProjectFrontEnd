import { Switch, Route } from 'react-router-dom';
import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import Container from './components/Container';
import TaskPage from './pages/TaskPage/';
import ModalTaskPages from './components/ModalTaskPages/ModalTaskPages';
import Header from './components/Header';
// import PublicRoute from './components/PublicRoute';
// import PrivateRoute from './components/PrivateRoute';

import authOperations from './redux/auth/auth-operations';
import routes from './routes';

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);
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
          {/*реализация с публичными и приватными роутами */}
          {/* <PrivateRoute
            path={routes.sprint}
            component={SprintView}
            redirectTo={routes.register}
          />
          <PrivateRoute
            path={routes.projectDetails}
            component={ProjectDetailsView}
            redirectTo={routes.register}
          />
          <PrivateRoute
            exact
            path={routes.projects}
            component={ProjectsView}
            redirectTo={routes.register}
          />
          <PublicRoute
            path={routes.login}
            restricted
            component={LoginPage}
            redirectTo={routes.projects}
          />
          <PublicRoute
            path={routes.register}
            restricted
            component={RegisterPage}
            redirectTo={routes.projects}
          /> */}
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
