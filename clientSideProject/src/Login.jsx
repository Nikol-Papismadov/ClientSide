import React, { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    fetch('https://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to login');
      }
      return response.json();
    })
    .then(data => {
      // Handle successful login
      console.log('Login successful:', data);
      // Store token in local storage or cookie
    })
    .catch(error => {
      setError('Failed to login. Please check your credentials.');
      console.error('Login error:', error);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
