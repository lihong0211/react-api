import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import UseState from './UseState'
import UseEffect from './UseEffect/AsyncData'

function Hooks() {
  return <div>
    <BrowserRouter>
      <Link to="/hook/use-state"><div>UseState</div></Link>
      <Link to="/hook/use-effect"><div>UseEffect</div></Link>
      <Switch>
        <Route path={'/hook/use-state'} component={UseState}></Route>
        <Route path={'/hook/use-effect'} component={UseEffect}></Route>
      </Switch>
    </BrowserRouter>
  </div>
}

export default Hooks