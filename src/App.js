import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';
import Container from './components/Container';

const ProjectsView = lazy(() =>
  import('./views/ProjectsView' /* webpackChunkName: "ProjectsView" */),
);

function App() {
  return (
    <Container>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path={routes.projects} component={ProjectsView} />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
