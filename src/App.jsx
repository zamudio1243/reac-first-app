import React from "react";
import { nanoid } from "nanoid";
import Star from "./components/Star";

const Ejemplo = () => {
  const [movie, setMovie] = React.useState({});
  const [moviesList, setMoviesList] = React.useState([]);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [idToEdit, setidToEdit] = React.useState("");

  const saveMovie = (e) => {
    e.preventDefault();
    if (movie.name.trim() === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    setMoviesList([...moviesList, { ...movie, id: nanoid() }]);
    setMovie({ name: "", stars: 0, image: "" });
  };

  const deleteMovie = (id) => {
    const moviesFiltered = moviesList.filter((movie) => movie.id !== id);
    setMoviesList(moviesFiltered);
  };

  const editMovie = (movie) => {
    setIsEditMode(true);
    setMovie(movie);
    setidToEdit(movie.id);
  };

  const updateMovie = (e) => {
    e.preventDefault();
    if (movie.name.trim() === "") {
      alert("Todos los campos son obligatorios");
      return;
    }
    const moviesEdited = moviesList.map((value) => {
      if (value.id === idToEdit) {
        return movie;
      }
      return value;
    });
    setMoviesList(moviesEdited);
    setIsEditMode(false);
  };

  const placeholder =
    "https://transportscotlprodblob.blob.core.windows.net/cache/a/e/4/0/e/d/ae40ed439863cdc8ea6833ba0dfad2136e0d6178.png";

  return (
    <div className="container mt-5">
      <h1 className="text-center">Peliculas</h1>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Peliculas</h4>
          <ul className="list-group">
            {moviesList.map((movie) => (
              <li className="list-group-item" key={movie.id}>
                <div className="card" style={{ width: "32rem" }}>
                  <img
                    src={movie.image ? movie.image : placeholder}
                    className="card-img-top"
                    alt="imagen"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.name}</h5>
                    <div class="container">
                      <div class="col-6">
                        {[...Array(parseInt(movie.stars))].map(() => (
                          <Star />
                        ))}
                      </div>
                      <button
                        className="btn btn-sm btn-danger float-end mx-2"
                        onClick={() => deleteMovie(movie.id)}
                      >
                        Eliminar
                      </button>
                      <button
                        className="btn btn-sm btn-warning float-end"
                        onClick={() => editMovie(movie)}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Añadir Peliculas</h4>
          <form
            onSubmit={(e) => {
              if (isEditMode) {
                return updateMovie(e);
              } else {
                return saveMovie(e);
              }
            }}
          >
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Titulo"
              value={movie.name}
              onChange={(e) => {
                setMovie({ ...movie, name: e.target.value });
              }}
            />
            <select
              className="form-select"
              id="calificacion"
              onChange={(e) => setMovie({ ...movie, stars: e.target.value })}
              value={movie.stars}
            >
              <option value="">Nada seleccionado</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Portada"
              value={movie.image}
              onChange={(e) => {
                setMovie({ ...movie, image: e.target.value });
              }}
            />

            <button
              className={
                isEditMode ? "btn btn-sm btn-warning" : "btn btn-dark btn-block"
              }
              type="summit"
            >
              {isEditMode ? "Actualizar" : "Agregar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ejemplo;
