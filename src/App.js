import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1> Weather App</h1>
      <Weather />
      <div className="Container">
        <footer>
          This project was coded by Stella Bullo and is{" "}
          <a
            href="https://github.com/Stella5791/react-app-weather-final"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
