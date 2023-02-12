import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FirebaseAuthProvider from "./components/FirebaseAuthProvider";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseAuthProvider>
  </React.StrictMode>
);
