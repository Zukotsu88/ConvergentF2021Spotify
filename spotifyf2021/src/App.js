import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import React from 'react';

import Landing from './views/Landing';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Router>  
        <Route exact path ="/">
          <Landing />
        </Route>

        <Route exact path = "/login">
          <Login/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
