import React from "react";
import "./auth.css";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";


const Register = ({ username, setUsername, password, setPassword }) => {
  return (
    <div className="loginpage">
      <h1>Create your account</h1>
      <div>
        <Input
          type="text"
          icon={faUser}
          placeholder="Username"
          value={username}
          className="input username"
          label={"Username: "}
          setValue={setUsername}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          icon={faKey}
          placeholder="Password"
          value={password}
          className="input password"
          label={"Password: "}
          setValue={setPassword}
        />
        <Button text="Sign Up" className="button" icon={faKey} type="submit" />
      </div>
    </div>
  );
};

export default Register;
