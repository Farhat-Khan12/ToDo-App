import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Logout extends Component {
  render() {
    return (
      <>
      <div>
      <div className="Nav">
        <Link to="/"><button className="btn1h">Home </button></Link>
        <Link to="/login"><button className="btn2h">Login Again</button></Link>
        <Link to="/regestration"><button className="btn3h"> Regestration</button></Link>
        <Link to="/login"><button className="btn4h"> ToDoApp</button></Link>
        <Link to="/logout"><button className="btn5h">Logout</button></Link>
      </div><br/><br/>
        <h1 className="heading">Logout Done Successfully</h1>
        </div>
      </>
    )
  }
}

export default Logout
