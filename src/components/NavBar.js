import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
class NavBar extends Component {
  render() {
    return (
      <>
        <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <Nav.Link to="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link to="/registration">Registraton</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link to="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link to="/todo">To-Do-App</Nav.Link>
        </Nav.Item>
        </Nav>
      </>
    )
  }
}

export default NavBar



