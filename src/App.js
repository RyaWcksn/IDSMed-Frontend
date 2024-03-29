import React, { Component } from 'react';
import {Jumbotron, Button} from 'reactstrap';
import Header from './Header.jsx';
import Satu from './Satu';
import Device from './Device';
import Patients from './Patients';
import Login from './Login';
import Inputt from './Inputt';
import Manage from './Manage';
import Inman from './Inman';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import PrivateRoute from 'react-private-route';
// import Not from './Not';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Route path="/Satu" component={Satu} />
        <Route path="/Device" component={Device} />
        <Route path="/Patients" component={Patients} />
        <Route path="/Login" component={Login} />
        <Route path="/Inputt" component={Inputt} />
        <Route path="/Manage" component={Manage} />
        <Route path="/Inman" component={Inman} />
       </Router>
       </div>  
    ); 
  }
}

export default App;