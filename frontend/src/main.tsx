import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // <-- ensure this exists and is correct

createRoot(document.getElementById("root")!).render(<App />);
