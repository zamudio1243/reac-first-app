import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnterioresPokesAction,
  getPokesAccion,
  getSiguientesPokemosAccion,
} from "./../redux/pokeDucks";

const Pokemones = () => {
  const dispatch = useDispatch();

  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);
  return (
    <div>
      <h3>Pokemones</h3>
      <br />
      {pokemones.length === 0 && (
        <button
          onClick={() => {
            dispatch(getPokesAccion());
          }}
        >
          Obtener
        </button>
      )}

      {next && (
        <button
          onClick={() => {
            dispatch(getSiguientesPokemosAccion());
          }}
        >
          Obtener
        </button>
      )}

      {previous && (
        <button
          onClick={() => {
            dispatch(getAnterioresPokesAction());
          }}
        >
          Anteriores
        </button>
      )}

      <ul>
        {pokemones.map((item) => (
          <li key={item.url}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
