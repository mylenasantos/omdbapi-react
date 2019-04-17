import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //react components
import Main from './pages/main'; //importando pagina Main
import Movies from "./pages/movies";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/:search" component={Movies} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
