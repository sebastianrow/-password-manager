import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router";
import React from "react";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
