import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar bg-dark<">
      <div className="container">
        <Link to="/">Inicio</Link>
        <Link to="/articulos">Articulos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
