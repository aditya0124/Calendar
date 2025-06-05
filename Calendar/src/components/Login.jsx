import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  async function handleLogin() {
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }
    try {
      const res = await fetch('http://localhost:4000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // credentials: 'include',
        body: JSON.stringify({ username: username.trim() })
      });
      const data = await res.json();
      if (data.success) {
        onLogin(data.username);
      } else {
        setError('Login failed');
      }
    } catch (err) {
      setError('Server error');
    }
  }

  return (
    <div style={{ margin: 20 }}>
      <h2>Login with your username</h2>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
