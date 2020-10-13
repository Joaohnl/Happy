import React from 'react';
import { HashRouter, Switch, Route, } from 'react-router-dom';

import Landing from './pages/landing-page/landing-page';
import OrphanagesMap from './pages/app/orphanages-page'; 

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </HashRouter>
  )
}

export default Router;