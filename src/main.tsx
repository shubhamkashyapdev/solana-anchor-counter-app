import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
)
