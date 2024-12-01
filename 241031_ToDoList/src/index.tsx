import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defalutTheme } from "./theme";
import App from "./App";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={defalutTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);