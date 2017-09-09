import React, { Component } from 'react';
import logo from './logo.svg';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { NavLink, Link } from 'react-router-dom';
import { Route } from 'react-router-dom';  
import { Router } from 'react-router';
import './App.css';
import OrdersPage from './OrdersPage';
import OrdersPage2 from './OrdersPage2';
import OrdersPage3 from './OrdersPage3';
import OrdersPage4 from './OrdersPage4';

class App extends Component {
  render() {
    var styleObj={
      backgroundColor:"#00A99E"
    }
    var styleObj2={
      border:"none"
    }
    return (
        <div className="App">
          <div className="pusher" style={styleObj}>
          <div style={styleObj} className="ui inverted vertical masthead center aligned segment">
             <div className="ui container">
               <div style={styleObj2} className="ui large secondary inverted pointing menu">
                  <NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>
                  <NavLink className="item" exact to="/">Work</NavLink>
                  <NavLink className="item" exact to="/">Company</NavLink>
                  <NavLink className="item" exact to="/">Careers</NavLink>
                  <div className="right menu">
                    <NavLink className="item" activeClassName="active" exact to="/signin">Log In</NavLink>
                    <NavLink className="item" activeClassName="active" exact to="/signup">Sign Up</NavLink>
                  </div>
               </div>
             </div>

             <div className="ui text container">
                 <h1 className="ui inverted header">IT'S A NEW WORLD</h1>
                 <h2>Start a new journey</h2>
            
             </div>
          </div>
          </div>

          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} /> 
          <Route path="/orders" component={OrdersPage} /> 
          <Route path="/orders2" component={OrdersPage2} /> 
          <Route path="/orders3" component={OrdersPage3} />
          <Route path="/orders4" component={OrdersPage4} />
        </div>  
     
        

    );
  }
}

export default App;
