import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import App from "./components/App";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
