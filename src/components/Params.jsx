import React from "react";
import Saludo from "./components/Saludo";
const Params = () => {
  const [nombre, setNombre] = React.useState("");
  return (
    <div className="container mt-5">
      Hola mundo de react
      <input
        type={nombre}
        class="form-control"
        placeholder="Nombre"
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      />
      <Saludo persona={nombre} />
    </div>
  );
};

export default Params;
