import React from 'react';
import classnames from 'classnames';
import Validator from 'validator';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import OrdersPage from './OrdersPage';
import OrdersPage2 from './OrdersPage2';
import OrdersPage3 from './OrdersPage3';
import OrdersPage4 from './OrdersPage4';
import { Route } from 'react-router-dom'; 

class SignIn extends React.Component {

    constructor(props) {
			super(props);

			this.state = {
				email: '',
				password: '',
				errors: {}
		    }

		    this.handleChange = this.handleChange.bind(this);
		    this.handleSubmit = this.handleSubmit.bind(this);
    }
		

	handleChange = (event) => {
		if(!!this.state.errors[event.target.name]){
			let errors = Object.assign({}, this.state.errors);
			delete errors[event.target.name];
        	this.setState({
        	   [event.target.name]: event.target.value,
        	   errors
        	});
		}else{
			this.setState({ [event.target.name]: event.target.value });
		}
		
    }

    handleSubmit = (event) => {

        event.preventDefault();

        let errors = {};

        if(this.state.email === '') errors.email = "This field can not be empty";
        if(this.state.password === '') errors.password = "This field can not be empty";

        errors.legal = "Now you can log in";
        errors.illegal = "Input wrong email address or password";
   

        this.setState({ errors });

    }


	render(){

		var usersObj={
    		"users": [
        		{
            		"_id": "59af2582b67be18e39498d11",
            		"email": "admin@gmail.com",
            		"password": "12345678",
            		"role": "Admin",
            		"profile": {
                		"phoneNumber": "(222)333-4444",
                		"lastName": "Admin",
                		"firstName": "Admin",
                		"title": "Admin"
            		}
        		},
        		{	
            		"_id": "59af261fb67be18e39498d12",
            		"email": "seller1@gmail.com",
            		"password": "347989732",
            		"role": "Seller",
            		"profile": {
                		"phoneNumber": "(111)222-3333",
                		"lastName": "Seller",
                		"firstName": "Xu",
                		"title": "Manager"
            		}
        		},
        		{
            		"_id": "59af2d5bb67be18e39498d1a",
            		"email": "seller2@gmail.com",
            		"password": "4737987837",
            		"role": "Seller",
            		"profile": {
                		"phoneNumber": "(555)444-8888",
                		"lastName": "Seller",
                		"firstName": "Zhang",
                		"title": "Manager"
            		}
        		},
        		{
            		"_id": "59b060912c7c449988ce9397",
            		"email": "buyer@gmail.com",
            		"password": "43838888",
            		"role": "Buyer",
            		"profile": {
                		"phoneNumber": "(213)706-1352",
                		"lastName": "Buyer",
                		"firstName": "Zhao",
                		"title": "Manager"
            		}
        		}
    		]
		}

		usersObj=JSON.stringify(usersObj);
		localStorage.setItem("temp",usersObj);
		var result=localStorage.getItem('temp');
		result=JSON.parse(result);
		console.log({result});

        var styleObj={
        	color:"#00A99E"
        }

         var styleObj2={
        	backgroundColor:"#00A99E",
        	color:"white",
        	marginLeft:400,
        	marginRight:400
        }

        var styleObj3={
        	marginLeft:100,
        	marginRight:100
        }

        var styleObj4={
        	marginLeft:300,
        	marginRight:300
        }

         var styleObj5={
        	marginLeft:200,
        	marginRight:200
        }

        var styleObj6={
        	color:"#D9A4A4"
        }


		return(
			<div className="ui middle aligned center aligned grid">
			<div className="column">
			<br /><br />
			<h1>
			     <div style={styleObj} className="content">Log-in your account</div>
			</h1>
			<form style={styleObj4} className="ui form" onSubmit={this.handleSubmit}>

               <div className="ui stacked segment">
			   <div style={styleObj3} className={classnames('field', {error: !!this.state.errors.email})}>
			       <div className="ui left icon input">
			       <i className="user icon"></i>
			   	   <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} id='email'    />  
			       </div>
			       {this.state.errors.email && <span style={styleObj6}>{this.state.errors.email}</span>}
			   </div>

			    <div style={styleObj3} className={classnames('field', {error: !!this.state.errors.password})}>
			   	   <div className="ui left icon input">
			       <i className="lock icon"></i>
			   	   <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} id='password'    />
			       </div>
			       {this.state.errors.password && <span style={styleObj6}>{this.state.errors.password}</span>}
			   </div>

			    <div style={styleObj3} className={classnames('field', {error: !!this.state.errors.legal})}>
                   	{this.state.email===result["users"][0]["email"]&&this.state.password===result["users"][0]["password"]&&<span style={styleObj}>{this.state.errors.legal}</span>}
                   	{this.state.email===result["users"][1]["email"]&&this.state.password===result["users"][1]["password"]&&<span style={styleObj}>{this.state.errors.legal}</span>}
                   	{this.state.email===result["users"][2]["email"]&&this.state.password===result["users"][2]["password"]&&<span style={styleObj}>{this.state.errors.legal}</span>}
                   	{this.state.email===result["users"][3]["email"]&&this.state.password===result["users"][3]["password"]&&<span style={styleObj}>{this.state.errors.legal}</span>}
                </div>


			    <div style={styleObj5}  className="field">
			   	   <button className="ui fluid large teal submit button" onClick={this.handleSubmit}>Check Available</button>
			   	   <br />
			   	   {this.state.email===result["users"][0]["email"]&&this.state.password===result["users"][0]["password"]&&<Link to="orders"><button className="ui fluid large teal submit button" onClick={this.handleClick}>Log In</button></Link>}
			   	   {this.state.email===result["users"][1]["email"]&&this.state.password===result["users"][1]["password"]&&<Link to="orders2"><button className="ui fluid large teal submit button" onClick={this.handleClick}>Log In</button></Link>}
			   	   {this.state.email===result["users"][2]["email"]&&this.state.password===result["users"][2]["password"]&&<Link to="orders3"><button className="ui fluid large teal submit button" onClick={this.handleClick}>Log In</button></Link>}
			   	   {this.state.email===result["users"][3]["email"]&&this.state.password===result["users"][3]["password"]&&<Link to="orders4"><button className="ui fluid large teal submit button" onClick={this.handleClick}>Log In</button></Link>}
			   	  
			   </div>
               </div>

			</form>

			<div style={styleObj2} className="ui message">
			New to us?<Link to="/signup"> Sign Up</Link>
			</div>
			</div>
			</div>
		);
	}
}

export default SignIn;