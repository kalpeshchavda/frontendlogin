import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Dashboard from '../Dashboard/Dashboard';
import {useNavigate} from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  
let loginUser = async (e) => {

    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            "Content-Type":"application/json"
        }
      });
      if(res.status === 200){
        let resJson = await res.json();
        
        setName("");
        setPassword("");
        setMessage("User found successfully");
        navigate('/dashboard',{ state:resJson});

        
      }else {
        setMessage("Invalid Username or Password");
      } 
    } catch (err) {
      console.log(err);
    }
  };

  return(

    

    <div className="container">
    <div className="brand-logo"></div>
    <div className="brand-title">LOGIN</div>
      <form onSubmit={loginUser}>
      <div className="inputs">
    
      <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
       
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">Login</button>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </div>
        </div>
      </form>
    </div>
  )
}


export default Login;
