import axios from "axios";

const dataInicial = {
  results: [],
};

const OBTENER_POKEMONONES_EXITO = "OBTENER_POKEMONONES_EXITO";
const SIGUIENTES_POKEMONES = "SIGUIENTES_POKEMONES";
const ANTERIORES_POKEMONES = " ANTERIORES_POKEMONES";

export default function pokesReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONONES_EXITO:
      return {
        ...state,
        ...action.payload,
      };

    case SIGUIENTES_POKEMONES:
      return {
        ...state,
        ...action.payload,
      };
    case ANTERIORES_POKEMONES:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
}

export const getPokesAccion = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );

    dispatch({
      type: OBTENER_POKEMONONES_EXITO,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSiguientesPokemosAccion = () => async (dispatch, getState) => {
  try {
    const { next } = getState().pokemones;

    const response = await axios.get(next);

    dispatch({
      type: ANTERIORES_POKEMONES,
      payload: {
        array: response.data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAnterioresPokesAction = () => async (dispatch, getState) => {
  try {
    const { previous } = getState().pokemones;

    const response = await axios.get(previous);

    dispatch({
      type: SIGUIENTES_POKEMONES,
      payload: {
        array: response.data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
