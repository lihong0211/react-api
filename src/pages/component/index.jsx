import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import ComponentDemo from './Component'
import PureComponentDemo from './PureComponent'
import Memo from './Memo'
import ForwardRef from './ForwardRef/ForwardRef'
import ForwardRefHOC from './ForwardRef/ForwardRef'
import LazySuspense from './LazySuspense/LazySuspense'
import Fragment from './Fragment.jsx'
import Profiler from './Profiler.jsx'
import StrictMode from './StrictMode/index.jsx'

function Components() {
  return <div>
    <BrowserRouter>
      <Link to="/component"><div>Component</div></Link>
      <Link to="/pure-component"><div>pureComponent</div></Link>
      <Link to="/memo"><div>Memo</div></Link>
      <Link to="/forward-ref"><div>ForwardRef</div></Link>
      <Link to="/forward-ref-hoc"><div>ForwardRefHOC</div></Link>
      <Link to="/lazy-suspense"><div>LazySuspense</div></Link>
      <Link to="fragment"><div>Fragment</div></Link>
      <Link to="profiler"><div>Profiler</div></Link>
      <Link to="strict-mode"><div>StrictMode</div></Link>
      <Switch>
        <Route path={'/component'} component={ComponentDemo}></Route>
        <Route path={'/pure-component'} component={PureComponentDemo}></Route>
        <Route path={'/memo'} component={Memo}></Route>
        <Route path={'/forward-ref'} component={ForwardRef}></Route>
        <Route path={'/forward-ref-hoc'} component={ForwardRefHOC}></Route>
        <Route path={'/lazy-suspense'} component={LazySuspense}></Route>
        <Route path={'/fragment'} component={Fragment}></Route>
        <Route path={'/profiler'} component={Profiler}></Route>
        <Route path={'/strict-mode'} component={StrictMode}></Route>
      </Switch>
    </BrowserRouter>
  </div>
}

export default Components