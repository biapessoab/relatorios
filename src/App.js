import React from "react"
import Forms from './pages/Forms.js'
import Procedimentos from './pages/procedimentos.js'
import ProcedimentosBF from './pages/procedimentos-bf.js'
import Cirurgias from './pages/cirurgias.js'
import Summary from './pages/summary.jsx'
import SummaryBF from './pages/summary-bf.jsx'
import Document from './pages/document.js'
import DocumentBF from './pages/document-bf.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='h-max'>
      <Switch>
        <Route exact path='/'>
          <Forms />
        </Route>
        <Route exact path='/procedimentos'>
          <Procedimentos />
        </Route>
        <Route exact path='/procedimentos-bf'>
          <ProcedimentosBF />
        </Route>
        <Route exact path='/cirurgias'>
          <Cirurgias />
        </Route>
        <Route exact path='/summary'>
          <Summary />
        </Route>
        <Route exact path='/summary-bf'>
          <SummaryBF />
        </Route>
        <Route exact path='/document'>
          <Document />
        </Route>
        <Route exact path='/document-bf'>
          <DocumentBF />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
