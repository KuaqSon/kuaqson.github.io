import React, { Component } from "react";
import "./App.css";
import { Grommet } from "grommet";

// Component
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <Grommet>
      <Header />
      <Home />
      <Footer />
    </Grommet>
  );
}

export default App;
