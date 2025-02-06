import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ToastContainer autoClose={1000} />
    <App />
  </BrowserRouter>,
);
