import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./page/LoginPage.jsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { themeToggle } from "./context/themeToggle.js";
const route = [
  { path: "/", element: <App /> },
  { path: "/login", element: <LoginPage /> },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <React.StrictMode>
      <div className="h-screen w-screen">
        <BrowserRouter>
          <Routes>
            {route.map(({ path, element }) => {
              return <Route key={path} path={path} element={element} />;
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  </RecoilRoot>
);
