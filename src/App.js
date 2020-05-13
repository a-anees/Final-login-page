import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.css";
import Login from "./Login";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Login />
      </Router>
    </div>
  );
}
