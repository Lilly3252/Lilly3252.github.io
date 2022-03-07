import React from "react";
import DarkMode from "./DarkMode";
import "./App.css";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <header className="App-header">
        <body>
          <nav>
            <ul>
              <DarkMode />
              <li>
                <a href="/">
                  <i className="material-icons">home</i>
                </a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="service">Services</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </nav>
        </body>
      </header>
    </div>
  );
}

export default App;
