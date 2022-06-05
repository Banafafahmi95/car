import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Root from "./redux/store";
import "react-toastify/dist/ReactToastify.min.css";
import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/bundle";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Root>
  </React.StrictMode>
);

reportWebVitals();
