import React from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Navbar(props) {
  const cerrarSesion = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.log("Ocurrio un error");
    }
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="btn btn-outline-primary">
          Inicio
        </NavLink>

        {props.firebaseUser !== null && (
          <NavLink to="/admin" className="btn btn-outline-primary">
            Admin
          </NavLink>
        )}
        {props.firebaseUser !== null ? (
          <NavLink to="/logout" className="btn btn-outline-primary">
            Logout
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className="btn btn-outline-primary"
            onClick={cerrarSesion()}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
