import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Step from './components/Step'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/first-step">
          <Step isFirstStep={true} />
        </Route>
        <Route path="/:stepId">
          <Step />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
