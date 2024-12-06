import React, { lazy } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const UsersTestControl = lazy(() =>
  import("users/UsersTestControl").catch(() => {
    return {
      default: () => <div className="error">Component is not available!</div>,
    };
  })
);

const TasksTestControl = lazy(() =>
  import("tasks/TasksTestControl").catch(() => {
    return {
      default: () => <div className="error">Component is not available!</div>,
    };
  })
);

const App = () => (
  <div className="container">
    <UsersTestControl></UsersTestControl>
    <TasksTestControl></TasksTestControl>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
