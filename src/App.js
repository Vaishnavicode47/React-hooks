import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");

  useEffect(() => {
    alert("Welcome to React Hooks!");
  }, []);

  const [number, setNumber] = useState(10);

  const multiplyByTwo = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  const showWelcome = useCallback(() => {
    alert("Welcome!");
  }, []);

  const showHello = useCallback(() => {
    alert("Hello Student!");
  }, []);

return (
  <div className="container">

    <h1 className="title">⚛ React Hooks Playground</h1>

    <p className="subtitle">
    </p>

    {/* useState */}
    <div className="card">
      <h2>📝 useState</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Welcome {name}</h3>
    </div>

    {/* useEffect */}
    <div className="card">
      <h2>⚡ useEffect</h2>

      <p>
        Alert is shown when the page loads.
      </p>
    </div>

    {/* useMemo */}
    <div className="card">
      <h2>🧠 useMemo</h2>

      <h3>Number : {number}</h3>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <h3>Result : {multiplyByTwo}</h3>
    </div>

    {/* useCallback */}
    <div className="card">
      <h2>🔁 useCallback</h2>

      <button onClick={showWelcome}>
        Welcome
      </button>

      <button onClick={showHello}>
        Hello
      </button>
    </div>

    <footer className="footer">
      Created by Vaishnavi ❤️
    </footer>

  </div>
);
}
export default App;