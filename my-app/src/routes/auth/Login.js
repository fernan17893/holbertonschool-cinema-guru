import React, { useState } from "react";
import './auth.css';


function Login(username, password, setUsername, setPassword) {
    return (
        <div className="login">
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    );
    }

export default Login;