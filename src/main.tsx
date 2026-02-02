/**
 * Application Entry Point
 *
 * This file serves as the main entry point for the React application.
 * It mounts the root App component to the DOM element with id 'root'.
 * It also imports global styles.
 */
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
