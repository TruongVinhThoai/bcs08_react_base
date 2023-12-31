import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { numberReducer } from "./DemoRedux/Redux/reducer/numberReducer";
import { shoeReducer } from "./Ex_Shoe_Redux/reducer/shoeReducer";
import { rootReducer } from "./Ex_Shoe_Redux/reducer/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

let store = createStore(
  // numberReducer,
  // shoeReducer,
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
