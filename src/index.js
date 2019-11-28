import React from "react";
import ReactDOM from "react-dom";
import Api from "./api";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Api />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
