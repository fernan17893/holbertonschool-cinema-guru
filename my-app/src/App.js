import React, { useState, useEffect } from 'react';
import './App.css';
import Authentication from '../src/routes/auth/Authentication';
import Dashboard from '../src/routes/dashboard/Dashboard';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post("http://localhost:8000/api/auth", {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setIsLoggedIn(true);
        setUsername(response.data.username);
      })
      .catch((error) => {
        setIsLoggedIn(false);
        setUsername("");
      });
  }, []);

  return isLoggedIn ? (
    <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <Authentication
      setIsLoggedIn={setIsLoggedIn}
      setUserUsername={setUsername}
    />
  );
}

export default App;