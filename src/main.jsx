import { TaskProvider } from "./context/TaskContext";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <TaskProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TaskProvider>,
);
