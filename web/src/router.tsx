import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

import Landing from './pages/landing-page';
import OrphanagesMap from './pages/orphanages-page'; 
import Orphanage from './pages/Orphanage'; 
import CreateOrphanage from './pages/CreateOrphanage'; 

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanage/:id" component={Orphanage} />

      </Switch>
    </BrowserRouter>
  )
}

export default Router;