import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import Router from "./routes/router.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Router />
    <Analytics />
  </>
);