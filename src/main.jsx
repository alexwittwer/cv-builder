import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex justify-center items-center">
      <App />
      <div className="mobile text-slate-50">Not available on mobile</div>
    </div>
  </React.StrictMode>
);
