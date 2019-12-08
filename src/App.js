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
      <section id="main">
        <Route path='/' exact component={HomeComponent} />
        <Route path='/generic' component={GenericComponent} />
        <footer id="footer">
                  <div class="copyright">
                    &copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images: <a href="https://unsplash.com/">Unsplash</a>.
                  </div>
                </footer>
            </section>
        </div>
      </Switch>
    </Router>
    
  );
}

export default App;
