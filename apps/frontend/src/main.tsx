import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme.ts";
import {GlobalStyle} from "./styles/global-style.ts";
import BaseLayout from "./layouts/BaseLayout.tsx";
import {queryClient} from "./lib/tanstack/queryClient.ts";
import {QueryClientProvider} from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BaseLayout>
          <App />
        </BaseLayout>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
