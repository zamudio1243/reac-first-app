import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./routes/Contacto";
import Articulo from "./routes/Articulo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="contacto" element={<Contacto />} />
        <Route path="articulos" element={<Articulo />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
