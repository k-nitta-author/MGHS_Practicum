import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';

// will work as a landing page for the study portal

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  // the URL for the login function of the backend
  const URL = "https://mghs-backend.onrender.com/login"

  // handles logging into the system
  // differentiates between admin and intern users
  // reads HTTP headers to find password and username
  let item = (username, password);
  
  async function handleLogin(){

    

    // construct headers to add to request
    let H = new Headers();

    // add basic authentication to headers using password and username
    H.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

    // fetch from backend URL
    let result = await fetch(URL, {
      method: "GET",
      headers: H}
    )
    
    // throw an error in event that resutlt is anything less than ok
    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }

    // usable data to parse if acceptable
    const data = await result.json()

    // set local storage if acceptale
    localStorage.setItem("OPTIFLOW_TOKEN", data.login_token);
    localStorage.setItem("OPTIFLOW_IS_ADMIN", data.is_admin);
    localStorage.setItem("OPTIFLOW_PUBLIC_ID", data.public_id);

    // if localSession is_admin returns true, then send to admin-dashboard
    // otherwise, send to intern-dashboard
    if (data.is_admin === true) {

      navigate('/admin-dashboard');
    } else {

      navigate('/intern-dashboard');

    }
  };

  const handleSignup = () => {
    navigate('/register-user');
  }

  return (
    <div>
      <div className="form-container">
        <h2>Welcome to MGHS Study Portal</h2>
        <form>
          <label htmlFor="username">Email/Username</label>
          <br />
          <input
            id="username"
            className='form-input'
            type="text"
            placeholder="Enter your email or username"
            value={username}
            required={true}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            className='form-input'
            type="password"
            placeholder="Enter you password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* add a modal to handle password reset */}
          <a href="/forgot-password">Forgot Password?</a>
          <br />
          <button type="button" onClick={handleSignup} className='button-outline'>Sign Up</button>
          <button type="button" onClick={handleLogin} className ='button-filled'>Login</button>
          <br />
        
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
