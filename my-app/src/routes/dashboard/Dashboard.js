import React from "react";
import "./dashboard.css";
import Header from "../../components/navigation/Header.js";
import SideBar from "../../components/navigation/SideBar";
import { BrowserRouter } from "react-router-dom";


export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
    <div className="dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}>
      <h1>Dashboard</h1>
      </Header>
      <SideBar />
    </div>
    </BrowserRouter>
  );
}