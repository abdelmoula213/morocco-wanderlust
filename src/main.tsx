import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // <- this imports Tailwind
import { ThemeProvider } from "./context/ThemeContext";
import { enableSourceProtection } from "./lib/protect-source";

enableSourceProtection();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
