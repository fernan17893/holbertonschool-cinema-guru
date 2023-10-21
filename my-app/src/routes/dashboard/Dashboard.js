import React from "react";
import "./dashboard.css";
import Header from "../../components/navigation/Header.js";

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}>
      <h1>Dashboard</h1>
      </Header>
    </div>
  );
}