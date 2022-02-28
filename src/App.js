import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Components from './pages/component/index.jsx'
import Tool from './pages/tool/index'
import Hook from './pages/hooks/index'

function App() {
    return <div>
    <BrowserRouter>
        <Link to="/components"><div>Components</div></Link>
        <Link to="/tool"><div>Tool</div></Link>
        <Link to="/hook"><div>Hook</div></Link>
        <Switch>
            <Route path={'/components'} component={Components}></Route>
            <Route path={'/tool'} component={Tool}></Route>
            <Route path={'/hook'} component={Hook}></Route>
        </Switch>
    </BrowserRouter>
    </div>
}

export default App