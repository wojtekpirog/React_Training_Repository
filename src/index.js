import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./App.css";

const rootBox = document.querySelector("#root");
const root = createRoot(rootBox);

root.render(
  <App />  
);