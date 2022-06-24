import React from "react";
import { auth, db } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [isRegister, setIsRegister] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() && !password.trim()) {
      setError("Datos vacíos");
      return;
    }

    if (!email.trim()) {
      setError("Email vacío");
      return;
    }

    if (!password.trim()) {
      setError("Contraseña vacía");
      return;
    }

    if (password.length < 6) {
      setError("Contraseña demasiada corta. 6 o más caracteres");
      return;
    }

    if (isRegister) {
      register();
      return;
    }

    if (!isRegister) {
      login();
      return;
    }
  };

  const login = async () => {
    try {
      const authResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(authResponse);
      setError(null);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado");
        return;
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
        return;
      }
      if (error.code === "auth/too-many-requests") {
        setError("Demasiados intentos fallidos. Inténtelo más tarde");
        return;
      }
      setError("Ocurrió un error. Inténtelo más tarde");
    }
  };

  const register = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      await setDoc(doc(db, "usuarios", res.user.uid), {
        email: res.user.email,
        uid: res.user.uid,
        fechaCreación: Date.now(),
        displayName: res.user.displayName,
      });
      console.log("llego");
      setEmail("");
      setPassword("");
      setError(null);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email inválido");
        return;
      }

      if (error.code === "auth/email-already-in-use") {
        setError("Email ya registrado");
        return;
      }
      setError("Ocurrió un error. Inténtelo más tarde");
    }
  };

  const changeRegister = () => {
    setError(null);
    setIsRegister(!isRegister);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="mt-5">
      <h3 className="text-center">
        {isRegister ? "Registro" : "Iniciar sesión"}
      </h3>
      <br />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Ingrese Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Ingrese Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <div className="alert alert-danger mt-2 mb-2">{error}</div>
            )}
            <button type="submit" className="btn btn-lg mb-2 btn-dark w-100">
              {isRegister ? "Registrarse" : " Acceder"}
            </button>
          </form>
          <button
            className="btn btn-lg btn-info w-100"
            onClick={changeRegister}
          >
            {isRegister ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
