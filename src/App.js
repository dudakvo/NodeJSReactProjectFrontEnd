import Container from './components/Container';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import Header from './components/Header';

import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

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
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <RegisterPage />
        <LoginPage />
      </Container>

      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route exact path={routes.projects} component={ProjectsView} />
          <Route path={routes.projectDetails} component={ProjectDetailsView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
