import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const myName = "Wojciech";
const mySurname = "Piróg";
const nowObject = new Date(); // Date() jest obiektem
const year = nowObject.getFullYear();
const month = nowObject.getMonth(); // .getMonth() zwraca liczbę od 0 do 11
const dayOfMonth = nowObject.getDate();
const hours = nowObject.getHours();
const minutes = nowObject.getMinutes();
const seconds = nowObject.getSeconds();

ReactDOM.render(
  <div>
    <h1>React Sandbox Repository</h1>
    <p>Created by: {myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase()} {mySurname.charAt(0).toUpperCase() + mySurname.slice(1).toLowerCase()}</p>
    <p>Published at: {`${year}/${month + 1}/${dayOfMonth} ${hours}:${minutes}:${seconds}`}</p>
    <p>Current temperature: 22<span className="degSign">&deg;C</span></p>
    <p>Pir<span className="redTxt">Dev</span><span className="regSign"><sup>&reg;</sup></span> {nowObject.getFullYear()}</p>
  </div>,
  document.querySelector("#root")
);