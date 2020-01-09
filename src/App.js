import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { mediaQueries } from "./utils/mediaQueries";
import styled from "styled-components";

interface Box {
  width: Number;
}

const Box = styled.div`
  background-color: red;
  height: 100px;
  width: 100px;
  ${mediaQueries("md")`
    background-color: green;
  `}
  ${props => mediaQueries("md")(`width: ${props.width}px`)}
`;

function App() {
  return (
    <div className="App">
      <Box width={400} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
