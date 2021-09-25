import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  pokemon: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        loading: false,
        error: "",
        pokemon: action.payload,
      };
    case "Fail":
      return {
        loading: false,
        error: "There is no pokemon",
        pokemon: {},
      };
    default:
      return state;
  }
};

function FetchPokeApi() {
  const [fetchState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/145c")
      .then((res) => {
        dispatch({ type: "Success", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "Fail" });
      });
  });
  return (
    <div>
      <h3>
        {fetchState.loading ? "Loading..." : fetchState.pokemon.name}
        {fetchState.error ? fetchState.error : null}
      </h3>
      <img
        src={
          fetchState.pokemon?.sprites
            ? fetchState.pokemon.sprites.front_default
            : "data:image/png;base64,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"
        }
      />
    </div>
  );
}

export default FetchPokeApi;
