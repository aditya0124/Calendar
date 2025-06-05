
import React, { useState } from 'react';
import Login from './components/Login';
import Calendar from './components/Calendar';

function App() {
  const [username, setUsername] = useState(null);

  if (!username) {
    return <Login onLogin={setUsername} />;
  }

  return <Calendar username={username} />;
}

export default App;


