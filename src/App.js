import React from 'react';
import './App.css';
import './assets/css/font-awesome.min.css';
import './assets/css/main.css';
import NavComponent from './Components/navComponent';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import HomeComponent from './Components/HomeComponent';
import GenericComponent from './Components/genericComponent';

function App() {
  return (

    <Router>
      <Switch>
      <div class="page-wrap">
        <NavComponent></NavComponent>
        <Route path='/' exact component={HomeComponent} />
        <Route path='/generic' component={GenericComponent} />
        </div>
      </Switch>
    </Router>
    
  );
}

export default App;
