import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    document.title = "React Hooks Playground";
    setToast(true);
    const timer = setTimeout(() => setToast(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const [number, setNumber] = useState(10);

  const multiplyByTwo = useMemo(() => {
    return number * 2;
  }, [number]);

  const showWelcome = useCallback(() => {
    alert("Welcome!");
  }, []);

  const showHello = useCallback(() => {
    alert("Hello Student!");
  }, []);

  return (
    <>
      <div className="bg-grid"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="container">
        {toast && (
          <div className="modal-backdrop" onClick={() => setToast(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setToast(false)}>×</button>
              <span className="modal-icon">⚡</span>
              <h3 className="modal-title">useEffect fired</h3>
              <p className="modal-desc">Ran once on mount — document title set, side effect complete.</p>
              <div className="toast-track">
                <div className="toast-bar"></div>
              </div>
            </div>
          </div>
        )}
        <div className="window">
          <div className="progress-track">
            <div className="progress-bar"></div>
          </div>
          <div className="titlebar">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="filename">React-hooks.jsx</span>
          </div>

        <div className="window-body">
          <h1 className="title">
            <span className="bracket">{"<"}</span>Reacthooks
            <span className="bracket">{" />"}</span>
            <span className="cursor"></span>
          </h1>
          <p className="subtitle">four core hooks, live and interactive</p>

          {/* useState */}
          <div className="card state reveal" style={{ animationDelay: "0.05s" }}>
            <span className="pill"><span className="pill-dot"></span>live</span>
            <div className="gutter">01<br />02<br />03<br />04</div>
            <div className="card-content">
              <h2>
                useState<span className="paren">()</span>
              </h2>
              <p className="desc">Holds local component state that persists between renders.</p>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <h3>
                <span className="label">Welcome, </span>
                <span className="value">{name || "..."}</span>
              </h3>
            </div>
          </div>

          {/* useEffect */}
          <div className="card effect reveal" style={{ animationDelay: "0.15s" }}>
            <span className="pill"><span className="pill-dot"></span>on mount</span>
            <div className="gutter">05<br />06<br />07</div>
            <div className="card-content">
              <h2>
                useEffect<span className="paren">()</span>
              </h2>
              <p className="desc">
                Runs a side effect after render — on mount, it sets the document title and fires the toast in the corner. Watch it appear ↗
              </p>
            </div>
          </div>

          {/* useMemo */}
          <div className="card memo reveal" style={{ animationDelay: "0.25s" }}>
            <span className="pill"><span className="pill-dot"></span>cached</span>
            <div className="gutter">08<br />09<br />10<br />11</div>
            <div className="card-content">
              <h2>
                useMemo<span className="paren">()</span>
              </h2>
              <p className="desc">Caches an expensive calculation until its dependency changes.</p>
              <h3>
                <span className="label">Number: </span>
                <span className="value">{number}</span>
              </h3>
              <button onClick={() => setNumber(number + 1)}>Increase Number</button>
              <h3>
                <span className="label">Result: </span>
                <span className="value">{multiplyByTwo}</span>
              </h3>
            </div>
          </div>

          {/* useCallback */}
          <div className="card callback reveal" style={{ animationDelay: "0.35s" }}>
            <span className="pill"><span className="pill-dot"></span>memoized</span>
            <div className="gutter">12<br />13<br />14</div>
            <div className="card-content">
              <h2>
                useCallback<span className="paren">()</span>
              </h2>
              <p className="desc">Memoizes a function reference so it isn't recreated every render.</p>
              <button onClick={showWelcome}>Welcome</button>
              <button onClick={showHello}>Hello</button>
            </div>
          </div>

          <div className="footer">built with react hooks · {new Date().getFullYear()}</div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;