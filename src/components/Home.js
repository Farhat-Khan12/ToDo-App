import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "./Home.css";
function Home() {
    return (
    <div className="main">
      <div className="Nav">
        <Link to="/"><button className="btn1h">Home </button></Link>
        <Link to="/login"><button className="btn2h">Login </button></Link>
        <Link to="/regestration"><button className="btn3h"> Regestration</button></Link>
        <Link to="/login"><button className="btn4h"> ToDoApp</button></Link>
        <Link to="/logout"><button className="btn5h">Logout</button></Link>
      </div>
      <div className="inner">
        <br/><br/><br/><br/><br/><br/><br/>
        <h1 className="heading">Welcome To</h1>
        <h1 className="heading">To Do Web App</h1>
      </div>
      </div>
    );
  };

export default Home;
