import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/layouts/Main";
// import "./index.css";
import "./styles/globals.scss";
import "./styles/others.css";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main>
        <Routes />
      </Main>
    </BrowserRouter>
  </React.StrictMode>
);
