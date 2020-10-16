import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";

ReactDOM.hydrate(
  <>
    <App />
  </>,
  document.getElementById("root")
);
