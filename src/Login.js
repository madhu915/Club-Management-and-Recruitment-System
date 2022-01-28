import React from 'react';
import './App.css';
import logo from './logo.png'
function Login() {
  return (
    <div className='black-bubble'>
        
        <div className="header">
            <img src={logo} alt="logo" className="logo"></img> 
            <h2 className="logo-head">ABC Club</h2>
        </div>
        <div className="bubble-center">
            <h2 className="bubble-heading"> WELCOME TO ABC CLUB <br/> OF SVCE</h2>
            <p className="bubble-para">Lorem ipsum  urabitur a euismod lorem, nec <br/>laoreet tellus. </p>
        </div>
        <form action="#">
            <div>
                <h2>LOGIN</h2>
                <p>Enter your details below</p>
                <br/>
            </div>
            <img src="" alt=""></img>
            <select name="user-type">
                <option value="Select-User">Select User</option>
                <option value="President">President</option>
                <option value="Student">Student</option>
                </select> <br/>
            <input type="text" name="user" placeholder="Username"></input> <br/>
            <input type="text"name="password" placeholder="Password"></input><br/>
            <button className="submit" type="submit">Login</button>
        </form> 
    </div>
  )
}

export default Login;
