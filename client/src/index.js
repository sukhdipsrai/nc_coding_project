import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./root";
import configureStore from "./store/store";
// import reportWebVitals from "./reportWebVitals";

// redux in initialized but never really used, considering this for maybe some future touch or expansion
document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
