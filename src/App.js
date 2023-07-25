import React from "react"
import Forms from './pages/Forms.js'
import Procedimentos from './pages/procedimentos.js'
import Cirurgias from './pages/cirurgias.js'
import Summary from './pages/summary.jsx'
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
        <Route exact path='/summary'>
          <Summary />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
