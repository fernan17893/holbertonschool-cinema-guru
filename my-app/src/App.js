import React, { useState, useEffect } from 'react';
import './App.css';
import Authentication from './components/Authentication';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      const requestOptions = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      fetch('/api/auth/', requestOptions)
        .then((response) => response.json())
        .then((response) => {
          setIsLoggedIn(true);
          setUserUsername(response.username);
        })
        .catch(() => {
          // Handle error
        });
    }
  }, []);

  if (isLoggedIn) {
    return <Dashboard userUsername={userUsername} />;
  } else {
    return <Authentication />;
  }
}

export default App;
