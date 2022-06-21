import React from "react";
import { nanoid } from "nanoid";

const Ejemplo = () => {
  const [tarea, setTarea] = React.useState("");
  const [tareas, setTareas] = React.useState([]);
  const [modoEdicion, setModoEdicion] = React.useState(false);

  const guardarTarea = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") {
      alert("Todos los campos son obligatorios");
      return;
    }
    const task = {
      tarea,
      id: nanoid(),
    };
    setTareas([...tareas, task]);
  };

  const eliminarTarea = (id) => {
    const arrayFiltrado = tareas.filter((item) => item.id !== id);
    setTareas(arrayFiltrado);
  };

  const editarTarea = (item) => {
    setModoEdicion(true);
    setTarea(item.tarea);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simple</h1>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {tareas.map((item) => (
              <li className="list-group-item" key={item.id}>
                <span className="lead">{item.tarea}</span>
                <button
                  className="btn btn-sm btn-danger float-end mx-2"
                  onClick={() => eliminarTarea(item.id)}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-sm btn-warning float-end"
                  onClick={() => editarTarea(item)}
                >
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Agregar Tarea</h4>
          <form onSubmit={(e) => guardarTarea(e)}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Agregar tarea"
              value={tarea}
              onChange={(e) => {
                setTarea(e.target.value);
              }}
            />
            <button
              className={
                modoEdicion
                  ? "btn btn-sm btn-warning"
                  : "btn btn-dark btn-block"
              }
              type="summit"
            >
              {modoEdicion ? "Actualizar" : "Agregar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ejemplo;
