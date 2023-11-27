import React from "react";
import Quote from "./Quote";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <Quote />
      <button onClick={() => window.location.reload(false)}>New Quote</button>
    </div>
  );
}

export default App;
