import React from "react";
import { App } from "Apps";
import { GlobalStyle } from "StaticPages/Styles";

/**
 * Load spa with client side routing.
 */
export default () => {
  return <>
    <GlobalStyle />
    <App />
  </>;
};
