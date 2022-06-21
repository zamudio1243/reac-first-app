import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mt-5">
      <Navbar />
      <div className="container">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
