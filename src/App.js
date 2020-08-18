import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu/Menu.js";
import Burger from "./components/Burger/Burger.js";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import GlobalFonts from "./fonts/fonts";


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <div className="social">
        <Navbar />
      </div>
      <GlobalFonts />
      <Home />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
