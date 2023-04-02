import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { CssBaseline } from "@mui/material"

import CustomizedTheme from "./app/CustomizedTheme"
import AppProvider from "./contexts/AppContext"

import "./app/firebase"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomizedTheme>
        <CssBaseline />
        <AppProvider>
          <App />
        </AppProvider>
      </CustomizedTheme>
    </BrowserRouter>
  </React.StrictMode>
)
