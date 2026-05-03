import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // <- this imports Tailwind
import "./i18n"; // initialize i18next
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
