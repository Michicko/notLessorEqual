import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { ProductsProvider } from "./contexts/products_context";

ReactDOM.render(
  <ProductsProvider>
     <App />
  </ProductsProvider>,
  document.getElementById("root")
);
