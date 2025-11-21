import React from "react";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";  
import "./App.css";
function App() {
  return (
    <main className="container">
      {/* <Navbar /> */}
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes >
      <div className="navigation">
        <p className="nav-button">prev</p>
        <p className="nav-button">next</p>
      </div>
    </main>
  );
}

export default App;
