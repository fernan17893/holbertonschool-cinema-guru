import React, { useState }from "react";
import './auth.css';
import Login from "./Login.js";
import Register from "./Register.js";


function Authentication({ setIsLoggedIn, setUserUsername }) {
    const [_switch, setSwitch] = useState('true');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="auth">
        <h1>Auth</h1>
        <form>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <div className="buttons">
                <button type="button" onClick={setSwitch(true)}>Login</button>
                <button type="button" onClick={setSwitch(false)}>Sign Up</button>
            </div>
        </form>
        {
            _switch ?
            <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} /> :
            <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
        }
        </div>
    );
    }

export default Authentication;