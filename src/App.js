import React, { lazy, Suspense } from 'react';
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
  return (
    <>
      <Container>
        <Header />
        <Modal data="111" />
      </Container>

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
