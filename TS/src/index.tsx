import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme as DefaultTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
     <ThemeProvider theme={ DefaultTheme}>
      <App />
    </ThemeProvider>
  </div>
);