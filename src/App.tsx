import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
