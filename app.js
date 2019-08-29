import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './home';
import About from './about';
import Users from './users';

class App extends React.Component{
    render(){
        return(
    <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
             
              <li className="nav-item">
                  <Link to={'/male'} className="nav-link">Male</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/female'} className="nav-link">Female</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/region'} className="nav-link">Region</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              
              <Route exact path='/male' component= { Home } />
              <Route path='/female' component={ About } />
              <Route path='/region' component={ Users } />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;