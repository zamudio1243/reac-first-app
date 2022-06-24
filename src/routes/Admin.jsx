import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import Firestore from "../components/Firestore";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      console.log("Existe usuario logeado");
      setUser(auth.currentUser);
    } else {
      console.log("No existe usuario loggeado");
    }
  }, []);

  return (
    <div className="mt-5">
      <h2 className="text-center">
        Ruta protegida
        <Firestore currentUser={user} />
      </h2>
    </div>
  );
}

export default Admin;
