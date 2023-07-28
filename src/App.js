import React from "react"
import Forms from './pages/Forms.js'
import Procedimentos from './pages/procedimentos.js'
import Cirurgias from './pages/cirurgias.js'
import Summary from './pages/summary.jsx'
import Document from './pages/document.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='h-screen'>
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
        <Route exact path='/document'>
          <Document />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
