import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import CanvasErrorBoundary from "./components/CanvasErrorBoundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CanvasErrorBoundary
      fallback={
        <div className="relative z-0 min-h-screen bg-primary text-white p-8">
          <h1 className="text-3xl font-bold">Hamza</h1>
          <p className="mt-3 text-secondary">
            The page hit a rendering error. Refresh, or check the browser console.
          </p>
        </div>
      }
    >
      <App />
    </CanvasErrorBoundary>
  </React.StrictMode>
);