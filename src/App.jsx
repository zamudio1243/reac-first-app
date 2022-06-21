import React from "react";
import { nanoid } from "nanoid";
import Star from "./components/Star";

const Ejemplo = () => {
  const [movie, setMovie] = React.useState({});
  const [moviesList, setMoviesList] = React.useState([]);
  const [isEditMode, setIsEditMode] = React.useState(false);

  const saveMovie = (e) => {
    e.preventDefault();
    if (movie.name.trim() === "" || movie.image.trim() === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    setMoviesList([...moviesList, { ...movie, id: nanoid() }]);
  };

  const deleteMovie = (id) => {
    const moviesFiltered = moviesList.filter((item) => item.id !== id);
    setMoviesList(moviesFiltered);
  };

  const editMovie = (item) => {
    setIsEditMode(true);
    setMovie(item);
  };

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
                    src={movie.image}
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
          <form onSubmit={(e) => saveMovie(e)}>
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
