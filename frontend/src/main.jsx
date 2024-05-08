import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="696155417223-ojjk4itl1g7r5ulq514nalaunv0o2see.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
