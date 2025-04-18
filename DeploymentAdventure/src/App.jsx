import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Link to="/testpage">CLICK ON ME MF!!!</Link>

      <h3>GRAHAM GRAHAM GRAHAM</h3>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You have clicked {count} times !
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <div style={{ color: "#000" }}>
          <h1>This is where we landed!</h1>
          <Link to="/testpage">CLICK HERE!</Link>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
