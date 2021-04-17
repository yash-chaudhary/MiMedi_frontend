import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import UserSettings from './pages/UserSettings';
import Utilities from './pages/Utilities';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={Login} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/settings' component={UserSettings} />
        <Route path='/utilities' component={Utilities} />
      </Switch>
    </Router>
  );
}

export default App;
