import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

const rBox = document.querySelector("#root");
const root = createRoot(rBox);

const name = "Wojciech";
let greeting = "";

const hourOfDay = new Date(2023, 11, 29, 1).getHours();

const h2Styles = {
  fontSize: "40px",
  fontWeight: "400",
};

if (hourOfDay > 12 && hourOfDay <= 18) {
  greeting = "Good afternoon";
  h2Styles.color = "lime";
} else if (hourOfDay > 18 && hourOfDay < 24) {
  greeting = "Good evening";
  h2Styles.color = "royalblue";
} else {
  greeting = "Good morning";
  h2Styles.color = "tomato";
}

root.render(
  <div>
    <h1>React Sandbox Repository</h1>
    <h2 style={h2Styles}>{greeting}, {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h2>
  </div>
);