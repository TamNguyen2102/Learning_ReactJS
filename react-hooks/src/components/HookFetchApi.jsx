import React, { useEffect, useState } from "react";
import axios from "axios";
function HookFetchApi() {
  const [pokemons, setPokemon] = useState([]);
  const [id, setId] = useState("");
  const [idFromButton, setIdFromButton] = useState("");

  useEffect(() => {
    console.log("Mounting");
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${idFromButton}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
        setPokemon(err);
      });
  }, [idFromButton]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setIdFromButton(id);
        }}
      >
        Fetch Data
      </button>

      <h3>
        Pokemon ID: {pokemons.id}, Pokemon name: {pokemons.name}
      </h3>
    </div>
  );
}

export default HookFetchApi;
