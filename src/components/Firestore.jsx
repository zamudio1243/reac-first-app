import React, { useEffect } from "react";
import { db } from "./../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  where,
} from "firebase/firestore";
import moment from "moment";

const Firestore = (props) => {
  const [tarea, setTarea] = React.useState("");
  const [arregloTareas, setArregloTareas] = React.useState([]);
  const [id, setId] = React.useState("");
  const [editando, setEditando] = React.useState(false);
  const [mensajeError, setMensajeError] = React.useState("");

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await getDocs(
          collection(db, "tareas"),
          where("owner", "==", props.currentUser.uid)
        );
        const datosLeidos = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArregloTareas(datosLeidos);
        moment.locale("es");
      } catch (error) {
        console.log(error);
      }
    };

    if (arregloTareas.length === 0) {
      obtenerDatos();
    }
  }, []);

  const agregarTarea = async (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      setMensajeError("La tarea no puede estar vacía");
      return;
    }
    setMensajeError("");
    try {
      const nuevaTarea = {
        nombre: tarea,
        fecha: Date.now(),
        owner: props.currentUser.uid,
      };
      //  await setDoc(doc(db, "tareas", "aaaaa@sss"), nuevaTarea);
      const dataRef = await addDoc(collection(db, "tareas"), nuevaTarea);
      setArregloTareas([...arregloTareas, { id: dataRef.id, ...nuevaTarea }]);
      setTarea("");
    } catch (error) {
      setMensajeError(error.message);
    }
  };
  const editarTarea = async (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      setMensajeError("La tarea no puede estar vacía");
      return;
    }
    setMensajeError("");

    try {
      setArregloTareas(
        arregloTareas.map((item) => {
          return item.id === id
            ? {
                ...item,
                nombre: tarea,
              }
            : item;
        })
      );
      /* setDoc(doc(db, "tareas", id), { nombre: tarea }, { merge: true }); */
      await updateDoc(doc(db, "tareas", id), { nombre: tarea });
      setEditando(false);
      setTarea("");
    } catch (error) {
      setMensajeError(error.message);
    }
  };
  const eliminarTarea = async (idTarea) => {
    console.log(idTarea);
    await deleteDoc(doc(db, "tareas", idTarea));
    setArregloTareas(arregloTareas.filter((tarea) => tarea.id !== idTarea));
  };

  const actualizarTarea = (tarea) => {
    setEditando(true);
    console.log(tarea.id);
    setId(tarea.id);
    setTarea(tarea.nombre);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center"> CRUD FIREBASE</h1>
      <div className="row">
        <div className="col-md-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {arregloTareas.length !== 0 &&
              arregloTareas.map((tarea) => (
                <li className="list-group-item" key={tarea.id}>
                  <span className="lead">
                    {tarea.nombre} -{" "}
                    {moment(tarea.fecha).format("MMMM Do YYYY, h:mm:ss a")}
                  </span>
                  <button
                    className="btn btn-danger btn-sm float-end mx-2"
                    onClick={() => eliminarTarea(tarea.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning btn-sm float-end mx-2"
                    onClick={() => actualizarTarea(tarea)}
                  >
                    Editar
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h4 className="text-center">
            {editando ? "Editar tarea" : "Añadir tarea"}
          </h4>
          <form onSubmit={editando ? editarTarea : agregarTarea}>
            <input
              type="text"
              className="form-control w-100"
              placeholder="Ingrese tarea"
              value={tarea}
              onChange={(e) => {
                setTarea(e.target.value);
              }}
            />
            {mensajeError !== "" && (
              <div className="alert alert-danger mt-3">{mensajeError}</div>
            )}
            <button
              className={
                editando
                  ? "btn btn-warning w-100 mt-3"
                  : "btn btn-primary w-100 mt-3"
              }
            >
              {editando ? "Actualizar" : "Añadir"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Firestore;
