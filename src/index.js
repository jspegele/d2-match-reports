import React from "react"
import ReactDOM from "react-dom/client"

import { CssBaseline } from "@mui/material"

import App from "./App"
import CustomizedTheme from "./app/CustomizedTheme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <CustomizedTheme>
      <CssBaseline />
      <App />
    </CustomizedTheme>
  </React.StrictMode>
)
