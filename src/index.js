import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import {fontFae} from "./index.css";
//import swDev from './swDev'
const render = (Component) =>
  //ReactDOM.render(<Component />, document.getElementById("root"));
  ReactDOM.hydrate(<Component className={fontFae} />, document.getElementById("root"));

render(hot(App));
//swDev();
