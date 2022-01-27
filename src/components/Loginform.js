import React,{Component} from 'react';
import { Redirect, useHistory } from 'react-router';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./Login.css";
class Loginform extends Component{
  state={
    email: "",
    password: "",
    rememberMe:false,
    errors : {}
  }

  onChange = (e) =>{
    this.setState({[e.target.name] : e.target.value});
  }

  formValidation = () =>{
    const {email,password,
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
    if(password.trim().length<8)
    {
      errors.passwordLength= "Password must be of length 8 or more";
      isValid= false;
    }
    this.setState({errors});
    return isValid;
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const isValid= this.formValidation();
    
    if(isValid){
      alert("Login Successfull!!! Redirecting to TO DO APP")
      this.props.history.push('/todo');
      this.setState({password:"",
      email:""
      });
    }
  }

  render(){
    const {password,
      email,rememberMe,errors}= this.state;
  //let history= useHistory();
    return(
      <div className="main-div">
      <div className="Nav">
        <Link to="/"><button className="btn1h">Home </button></Link>
        <Link to="/login"><button className="btn2h">Login </button></Link>
        <Link to="/regestration"><button className="btn3h"> Regestration</button></Link>
        <Link to="/login"><button className="btn4h"> ToDoApp</button></Link>
        <Link to="/logout"><button className="btn5h">Logout</button></Link>
      </div><br/><br/>
      <div>
      <div className="inner-div">
        <h2>Login</h2><br/><br/>
      <form onSubmit={this.onSubmit} className="form">
        <label className="label1">Email Id</label><br/>
        <input type="text" name="email" value={email} onChange={this.onChange} className="email_id"/>
        <br/><br/><br/>
        <label className="label2">Password</label><br/>
        <input type="password" name="password" value={password} onChange={this.onChange} className="password"/><br/><br/><br/>
        <Button type="reset" variant="warning mb-3" className="btn1">Reset</Button>
        <Button type="submit" variant="success mb-3" className="btn2">Submit</Button>
        {Object.keys(errors).map((key)=>{
          return <div style={{color:"red"}} key={key}>{errors[key]}</div>
        })}
      </form>
      </div>
      </div>
      </div>
    )
  }
}
export default Loginform;