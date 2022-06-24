import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("usuario -> ", user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  return firebaseUser !== false ? (
    <div>
      <Navbar firebaseUser={firebaseUser}/>
      <div className="container">
        <Outlet />
      </div>
    </div>
  ) : (
    <div
      className="container d-flex justify-content-center aling-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="spinner-border"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      ></div>
      Cargando
    </div>
  );
}

export default App;
