import React, { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [direction, setDirection] = useState(1);

  const pages = ["/", "/Project", "/Services", "/Contact"];

  const goNext = () => {
    setDirection(1);
    const current = pages.indexOf(location.pathname);
    const nextIndex = (current + 1) % pages.length;
    navigate(pages[nextIndex]);
  };

  const goPrev = () => {
    setDirection(-1);
    const current = pages.indexOf(location.pathname);
    const prevIndex = (current - 1 + pages.length) % pages.length;
    navigate(pages[prevIndex]);
  };

  // animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100vw" : "-100vw",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100vw" : "100vw",
      opacity: 0,
    }),
  };

  return (
    <main className="container">
      <AnimatePresence custom={direction}>
        <motion.div
          key={location.pathname}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          style={{ height: "100%" }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Services" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <div className="navigation">
        <p className="nav-button" onClick={goPrev}>Prev</p>
        <p className="nav-button" onClick={goNext}>Next</p>
      </div>
    </main>
  );
}

export default App;
