import store from "app/store";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const render = () => {
  const App = require("./app/App").default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app/App", render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorkerRegistration.unregister();
