import React from "react"
import Forms from './Forms.js'
import Procedimentos from './procedimentos.js'
import Cirurgias from './cirurgias.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='bg-green h-screen'>
      <Switch>
        <Route exact path='/'>
          <Forms />
        </Route>
        <Route exact path='/procedimentos'>
          <Procedimentos />
        </Route>
        <Route exact path='/cirurgias'>
          <Cirurgias />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
