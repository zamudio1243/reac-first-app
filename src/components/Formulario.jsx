import React from "react";

const Formulario = () => {
  const [fruta, setFruta] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [calidad, setCalidad] = React.useState("");
  const [inventario, setInventario] = React.useState([]);

  const guardarDatos = (e) => {
    e.preventDefault();
    if (
      fruta.trim() === "" ||
      descripcion.trim() === "" ||
      calidad.trim() === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const canasta = {
      fruta,
      descripcion,
      calidad,
    };
    setInventario([...inventario, canasta]);
  };
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={(e) => guardarDatos(e)}>
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
        <select
          class="form-select"
          id="calidad"
          aria-label="Default select example"
          onChange={(e) => {
            setCalidad(e.target.value);
          }}
        >
          <option selected>Selecciona la calidad</option>
          <option value="Muy buena">Muy buena</option>
          <option value="Buena">Buena</option>
          <option value="Regular">Regular</option>
        </select>
        <button className="btn btn-primary btn-block mt-2">Agregar</button>
      </form>
      <br />
      {inventario.length !== 0 ? (
        inventario.map((item, index) => (
          <div>
            <br />
            <p>{item.fruta}</p>
            <p>{item.descripcion}</p>
            <p>{item.calidad}</p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Formulario;
