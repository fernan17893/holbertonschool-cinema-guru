import React from "react";
import "./dashboard.css";
import Header from "../../components/navigation/Header.js";
import SideBar from "../../components/navigation/SideBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import Favorites from "./Favorites";
import WatchLater from "./WatchLater";



export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
    <div className="dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}>
      <h1>Dashboard</h1>
      </Header>
      <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
    </div>
    </BrowserRouter>
  );
}