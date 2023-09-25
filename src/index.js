import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar";
import BottomNavbar from "./components/BottomNavbar";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <html data-theme="dracula, pastel">
      <BrowserRouter>
        <Navbar></Navbar>
        <HomePage />
        <BottomNavbar></BottomNavbar>
      </BrowserRouter>
    </html>
  </React.StrictMode>,
);
