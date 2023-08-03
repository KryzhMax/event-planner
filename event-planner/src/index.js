import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./utils/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <BrowserRouter basename="/event-planner"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
    <GlobalStyles />
  </React.StrictMode>
);

reportWebVitals();
