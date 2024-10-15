import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/dialogs" element={<Dialogs />} />
        <Route path="/profile" element={<Profile />} /> {/* Исправлено */}
      </Routes>
    </div>
  );
};

export default App;
