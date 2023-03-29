import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { CssBaseline } from "@mui/material"

import App from "./App"
import CustomizedTheme from "./app/CustomizedTheme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomizedTheme>
        <CssBaseline />
        <App />
      </CustomizedTheme>
    </BrowserRouter>
  </React.StrictMode>
)
