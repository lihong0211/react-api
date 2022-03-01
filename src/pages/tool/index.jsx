import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import CloneElement from './CloneElement'
import CreateContext from './CreateContext'
import CreateRef from './CreateRef'
import IsValidElement from './IsValidElement'
import Children from './Children'

function Tools() {
  return <div>
    <BrowserRouter>
      <Link to="/tool/clone-element"><div>CloneElement</div></Link>
      <Link to="/tool/create-context"><div>CreateContext</div></Link>
      <Link to="/tool/create-ref"><div>CreateRef</div></Link>
      <Link to="/tool/is-valid-element"><div>IsValidElement</div></Link>
      <Link to="/tool/children"><div>Children</div></Link>
      <Switch>
        <Route path={'/tool/clone-element'} component={CloneElement}></Route>
        <Route path={'/tool/create-context'} component={CreateContext}></Route>
        <Route path={'/tool/create-ref'} component={CreateRef}></Route>
        <Route path={'/tool/is-valid-element'} component={IsValidElement}></Route>
        <Route path={'/tool/children'} component={Children}></Route>
      </Switch>
    </BrowserRouter>
  </div>
}

export default Tools