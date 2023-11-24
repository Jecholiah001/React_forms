/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const LoginForm = () => {
  // State variables for username, email, password, login status, and errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  // Correct username and password for validation
  const correctUsername = 'Jecholiah Opare';
  const correctEmail = 'oparejecholiah@gmail.com';
  const correctPassword = 'jecho1234';

  // Function to handle the login process
  const handleLogin = () => {
    // Resetting previous error messages
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setError('');

    // Validating username
    if (username.trim() === '') {
      setUsernameError('Username cannot be empty');
      return;
    }
    // Validating email
    if (email.trim() === '') {
      setEmailError('Email cannot be empty');
      return;
    }

    // Validating password
    if (password.trim() === '') {
      setPasswordError('Password cannot be empty');
      return;
    }

    // Checking if the entered credentials are correct
    if (username === correctUsername && email=== correctEmail && password === correctPassword) {
      setLoggedIn(true);
      setError('');
    } else {
      setLoggedIn(false);
      setError('Invalid username, email or password. Please try again.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <p className='welcome'>Welcome, {username}!</p>
      ) : (
        <div>
          {/* Input for username */}
          <label>
            Username:
            < input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
          <br/><br/><br/>

           {/* Input for email */}
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          <br/><br/><br/>
          {/* Input for password */}
          <label>
            Password:   
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
          <br/><br/><br/>
          {/* Button to trigger login */}
          <button className='btn'  onClick={handleLogin}>Login</button>
          {/* Displaying overall error message */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default LoginForm;