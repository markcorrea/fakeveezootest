import React from "react";
import ReactDOM from "react-dom";

import { Veezoo } from "@fakeveezoo/react";

import App from "./App";

ReactDOM.render(
  <Veezoo>
    <App />,
  </Veezoo>,
  document.querySelector("#root")
);
