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
    <Suspense fallback={<p>loading...</p>}>
      <Switch>
        <Route exact path={routes.projects} component={ProjectsView} />
        <Route path={routes.projectDetails} component={ProjectDetailsView} />
      </Switch>
    </Suspense>
  );
}

export default App;
