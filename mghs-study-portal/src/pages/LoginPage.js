import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// will work as a landing page for the study portal

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Placeholder login logic
    if (username === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/intern-dashboard');
    }
  };

  const handleSignup = () => {
    // Placeholder signup logic
    navigate('/profile');
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
          <button type="button" onClick={handleLogin} className='button-filled'>Login</button>
          <br />
        
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
