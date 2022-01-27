import React,{Component} from 'react';
import { Redirect } from 'react-router';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./Regestration.css";
class Registrationform extends Component{
  state={
    first:"",
    last:"",
    username:"",
    email: "",
    password: "",
    confirmpass:"",
    errors : {}
  }

  onChange = (e) =>{
    this.setState({[e.target.name] : e.target.value});
  }

  formValidation = () =>{
    const {first,last,username,email,password,confirmpass,
    }=this.state;
    let isValid= true;
    const errors ={};
    if(!email.includes("@")){
      errors.emailId="Email should contain @";
      isValid=false;
    }
    if(!email.includes(".")){
      errors.emailId="Email should contain .";
      isValid=false;
    }
    if(email.trim().length<=0){
      errors.emailId="Enter Email id";
      isValid=false;
    }
    if(first.trim().length<=0){
        errors.FirstName="Enter First Name id";
        isValid=false;
    }
    if(last.trim().length<=0){
        errors.LastName="Enter Last Name id";
        isValid=false;
    }
    if(username.trim().length<=0){
        errors.userId="Enter UserName";
        isValid=false;
    }
    if(password.trim().length<8)
    {
      errors.passwordLength= "Password must be of length 8 or more";
      isValid= false;
    }
    if(confirmpass.trim().length<8)
    {
      errors.confpasswordLength= "Confirm Password must be of length 8 or more";
      isValid= false;
    }
    if(password.trim().length<0)
    {
      errors.confpasswordLengthMore= "Enter password";
      isValid= false;
    }
    if(confirmpass.trim().length<0)
    {
      errors.confpasswordLengthMore= "Enter Confirm password";
      isValid= false;
    }
    if(password!=confirmpass){
        errors.passwordMatch="Password and Confirm Password does not match";
        isValid=false;
    }
    this.setState({errors});
    return isValid;
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const isValid= this.formValidation();
    
    if(isValid){
      alert("Registration Done Successfully!!! Proceed to the login page...")
      this.setState({password:"",first:"",last:"",
      email:"",username:"",confirmpass:"",
      });
    }
  }

  render(){
    const {password,
      email,username,first,last,confirmpass,errors}= this.state;
    return(
      <div className="main-divr">
        <div className="Nav">
        <Link to="/"><button className="btn1h">Home </button></Link>
        <Link to="/login"><button className="btn2h">Login </button></Link>
        <Link to="/regestration"><button className="btn3h"> Regestration</button></Link>
        <Link to="/login"><button className="btn4h"> ToDoApp</button></Link>
        <Link to="/logout"><button className="btn5h">Logout</button></Link>
      </div><br/><br/>
      <div className="inner-divr">
        <h2>Registration</h2><br/>
      <form onSubmit={this.onSubmit} className="form">
        <label className="label1">First Name</label><br/>
        <input type="text" name="first" value={first} onChange={this.onChange} className="first"/>
        <br/>
        <label className="label2">Last Name</label><br/>
        <input type="text" name="last" value={last} onChange={this.onChange} className="last"/>
        <br/>
        <label className="label3">Username</label><br/>
        <input type="text" name="username" value={username} onChange={this.onChange} className="username"/>
        <br/>
        <label className="label4">Email Id</label><br/>
        <input type="text" name="email" value={email} onChange={this.onChange} className="email_id"/>
        <br/>
        <label className="label5">Password</label><br/>
        <input type="password" name="password" value={password} onChange={this.onChange} className="password"/>
        <br/>
        <label className="label6">Confirm Password</label><br/>
        <input type="password" name="confirmpass" value={confirmpass} onChange={this.onChange} className="confpass"/><br/><br/>
        <Button type="reset" variant="warning mb-3" className="btn1">Reset</Button>
        <Button type="submit" variant="success mb-3" className="btn2">Submit</Button>
        {Object.keys(errors).map((key)=>{
          return <div style={{color:"red"}} key={key}>{errors[key]}</div>
        })}
      </form>
      </div>
      </div>
    )
  }
}
export default Registrationform;