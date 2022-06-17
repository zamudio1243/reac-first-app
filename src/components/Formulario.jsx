import React from "react";

const Formulario = () => {
  const [fruta, setFruta] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  return (
    <div>
      <h2>Formulario</h2>
      <form>
        <input
          type="text"
          placeholder="Ingrese Fruta"
          className="form-control mb-2"
          onChange={(e) => {
            setFruta(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Ingrese Descripcion"
          className="form-control mb-2"
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        />
        <button className="btn btn-primary btn-block">Agregar</button>
      </form>
    </div>
  );
};

export default Formulario;
