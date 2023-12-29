import React from "react";
import { createRoot } from "react-dom/client";
// import "./App.css";
import "./App.css";

const rootContainer = document.querySelector("#root");
const root = createRoot(rootContainer);

const img = "https://picsum.photos/seed/picsum/200/300";

const customStyles = {
  color: "royalblue",
  fontSize: "30px",
  borderBottom: "2px solid tomato"
};

const galleryStyles = {
  display: "flex",
  marginTop: "20px"
};

const imgBoxStyles = {
  width: "200px",
  height: "200px",
  overflow: "hidden",
  margin: "10px"
};

const imgStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "grayscale(100%)"
};

root.render(
  <React.Fragment>
    <h1 style={customStyles}>🧑‍💻React Sandbox Repository🧑‍💻</h1>
    <div class="gallery" style={galleryStyles}>
      <div class="imgBox" style={imgBoxStyles}>
        <img src={img} style={imgStyles} alt="random" />
      </div>
      <div class="imgBox" style={imgBoxStyles}>
        <img src={img} style={imgStyles} alt="random" />
      </div>
      <div class="imgBox" style={imgBoxStyles}>
        <img src={img} style={imgStyles} alt="random" />
      </div>
    </div>    
  </React.Fragment>
);