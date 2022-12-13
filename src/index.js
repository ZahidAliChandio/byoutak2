import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-phone-number-input/style.css";
import { BrowserRouter } from "react-router-dom";
import { SelectContextProvider } from "./places/context/user-select";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SelectContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </SelectContextProvider>
);
