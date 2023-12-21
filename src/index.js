import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Router, useNavigate } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div data-theme="dracula, pastel">
      <AppRoutes />
    </div>
  </React.StrictMode>,
);
