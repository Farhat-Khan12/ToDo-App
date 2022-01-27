import React from 'react'
import { BrowserRouter, Link} from 'react-router-dom';

export const Navv = () => {
    return (
       <>
        <Link to="/">Login</Link>
        <Link to="./register">Register</Link>
        <Link to="./home">Home</Link>
        </>
      
    )
}
