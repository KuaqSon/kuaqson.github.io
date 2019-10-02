import React, { Component } from "react";
import "./App.css";
import { Grommet } from "grommet";

// Component
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Grommet plain>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Grommet>
  );
}

export default App;
