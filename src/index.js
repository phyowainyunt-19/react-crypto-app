import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

// for antdesign
import "antd/dist/antd.css";

/**
 ** createRoot
 ** This creates a root running in React 18, which adds all of the improvements of React 18 and allows you to use concurrent features.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
