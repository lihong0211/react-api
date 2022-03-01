import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import UseState from './UseState'
import UseEffectAsyncData from './UseEffect/AsyncData'
import UseEffectEvent from './UseEffect/Event'
import UseMemo from './UseMemo/index'
import UseRef from './UseRef'
import UseCallback from './UseCallback'

import UseReducer from './UseReducer'
import UseLayoutEffect from './UseLayoutEffect'
import UseContext from './UseContext'

function Hooks() {
  return <div>
    <BrowserRouter>
      <Link to="/hook/use-state"><div>UseState</div></Link>
      <Link to="/hook/use-effect-async-data"><div>UseEffectAsyncData</div></Link>
      <Link to="/hook/use-effect-event"><div>UseEffectEvent</div></Link>
      <Link to="/hook/use-memo"><div>UseMemo</div></Link>
      <Link to="/hook/use-ref"><div>UseRef</div></Link>
      <Link to="/hook/use-callback"><div>UseCallback</div></Link>

      <Link to="/hook/use-reducer"><div>UseReducer</div></Link>
      <Link to="/hook/use-layouteffect"><div>UseLayoutEffect</div></Link>
      <Link to="/hook/use-context"><div>UseContext</div></Link>
      <Switch>
        <Route path={'/hook/use-state'} component={UseState}></Route>
        <Route path={'/hook/use-effect-async-data'} component={UseEffectAsyncData}></Route>
        <Route path={'/hook/use-effect-event'} component={UseEffectEvent}></Route>
        <Route path={'/hook/use-memo'} component={UseMemo}></Route>
        <Route path={'/hook/use-ref'} component={UseRef}></Route>
        <Route path={'/hook/use-callback'} component={UseCallback}></Route>

        <Route path={'/hook/use-reducer'} component={UseReducer}></Route>
        <Route path={'/hook/use-layouteffect'} component={UseLayoutEffect}></Route>
        <Route path={'/hook/use-context'} component={UseContext}></Route>
      </Switch>
    </BrowserRouter>
  </div>
}

export default Hooks