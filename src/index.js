import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";

// for antdesign
import "antd/dist/antd.css";

/**
 ** createRoot
 ** This creates a root running in React 18, which adds all of the improvements of React 18 and allows you to use concurrent features.
 */

/**
 ** redux store
 ** In this code, we pass our reducers to the Redux createStore function, which returns a store object.
 ** We then pass this object to the react-redux Provider component, which is rendered at the top of our component tree.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
