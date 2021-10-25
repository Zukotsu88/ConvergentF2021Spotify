import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import React from 'react';

import Landing from './views/Landing';
import Login from './views/Login';
import Begin_Questionaire from './views/Begin_Questionaire';
import Question1 from './views/Question1';
import Question2 from './views/Question2';
import Question3 from './views/Question3';
import Question4 from './views/Question4';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/begin_questionaire">
          <Begin_Questionaire />
        </Route>

        <Route exact path="/question1">
          <Question1 />
        </Route>

        <Route exact path="/question2">
          <Question2 />
        </Route>

        <Route exact path="/question3">
          <Question3 />
        </Route>

        <Route exact path="/question4">
          <Question4 />
        </Route>

      </Router>
    </div>
  );
}

export default App;
