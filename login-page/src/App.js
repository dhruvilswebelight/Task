// import './App.css';

import React, {component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes, useParams, useRouteMatch } from 'react-router-dom';

import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path = "/">
      <LoginPage/> 
      </Route>
      <Route path = "/Registration-Page">
        <RegistrationPage />
      </Route>
       
      </header>
    </div>
  );
}

export default App;
