import "../stylesheets/application.scss";
import { createRoot } from "react-dom/client";
import App from "../src/App";
import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";

initializeLogger();
setAuthHeaders();

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
