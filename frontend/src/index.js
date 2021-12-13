import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import "./index.css";
import * as serviceWorker from "../src/serviceWorker";
import Check from './Routes/Check/check';
import reportWebVitals from './reportWebVitals';
import App from '../src/Routes/App'


ReactDOM.render(
  <React.StrictMode>
  <Check />
  </React.StrictMode>,
document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
