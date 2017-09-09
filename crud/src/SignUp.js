import React from 'react';
import classnames from 'classnames';
import Validator from 'validator';

class SignUp extends React.Component {

    constructor(props) {
			super(props);

			this.state = {
				firstname: '',
				lastname: '',
				email: '',
				password: '',
				title: '',
				email: '',
				phone: '',
				role: '',
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

        console.log(this.state);

        let errors = {};

        if(this.state.firstname === '') errors.firstname = "First Name can't be empty";
        if(this.state.lastname === '') errors.lastname = "Last Name can't be empty";
        if(this.state.email === '') errors.email = "Email Adreess can't be empty";
        if(this.state.password === '') errors.password = "Password can't be empty";
        if(this.state.phone === '') errors.phone = "Phone Number can't be empty";
        if(this.state.title === '') errors.title = "Title can't be empty";
        if(this.state.role === '') errors.role = "Role can't be empty";


        this.setState({ errors });
    }

	render(){
		var styleObj={
           color:"#00A99E",
           textAlign:"left"
        }
        var styleObj2={
        	backgroundColor:"#00A99E"
        }

        var styleObj3={
        	marginRight:60,
        	marginLeft:60
        }
		return(
			<form className="ui middle form" style={styleObj3} onSubmit={this.handleSubmit}>
			    <br />
			   <h1 style={styleObj} className="ui dividing header">Sign Up</h1>
              
			   <div className={classnames('field', {error: !!this.state.errors.firstname})}>
			   	   <label style={styleObj} htmlFor="name">Name</label>
			   	   <div className="two fields">
			   	     <div className="field"><input type="text" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.handleChange} id='firstname'    />
			       {this.state.errors.firstname && <span>{this.state.errors.firstname}</span>}</div>
			   	     <div className="field"><input type="text" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.handleChange} id='lastname'    />
			       {this.state.errors.lastname && <span>{this.state.errors.lastname}</span>}</div>
			   	   </div>
			   </div>

			   <div className={classnames('field', {error: !!this.state.errors.email})}>
			   	   <label  style={styleObj} htmlFor="email">Email Adreess</label>
			   	   <input type="text" name="email" value={this.state.email} onChange={this.handleChange} id='email'    />
			       {this.state.errors.email && <span>{this.state.errors.email}</span>}
			   </div>

		
			    <div className={classnames('field', {error: !!this.state.errors.password})}>
			   	   <label style={styleObj} htmlFor="password">Password</label>
			   	   <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id='password'    />
			   	    {this.state.errors.password}
			   </div>

			   <div className={classnames('field', {error: !!this.state.errors.phone})}>
			   	   <label style={styleObj} htmlFor="phone">Phone Number</label>
			   	   <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} id='phone'    />
			       {this.state.errors.phone && <span>{this.state.errors.phone}</span>}
			   </div>

			   <div className={classnames('field', {error: !!this.state.errors.title})}>
			   	   <label style={styleObj} htmlFor="title">Title</label>
			   	   <select>
			   	   <option></option>
			   	   <option>Admin</option>
			   	   <option>Manager</option>
			   	   </select>
			   </div>

			   <div className={classnames('field', {error: !!this.state.errors.role})}>
			   	   <label style={styleObj} htmlFor="role">Role</label>
			   	   <select>
			   	   <option></option>
			   	   <option>Admin</option>
			   	   <option>Buyer</option>
			   	   <option>Seller</option>
			   	   </select>
			   </div>

			    <div className="field">
			   	   <button style={styleObj2} className="ui huge primary button" onClick={this.handleClick}>Sign Up</button>
			   </div>


			</form>
		);
	}
}

export default SignUp;