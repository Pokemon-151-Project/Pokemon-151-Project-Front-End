// This takes an array of Pokemon objects and returns an individual card (SinglePokemon.js) for each object
import React from "react";
import SinglePokemon from "./SinglePokemon";

const AllPokemon = (props) => {
  const { pokemon, isShiny } = props;
  return (
    <section className="all-pokemon">
      {pokemon.map((poke) => {
        return (
          <SinglePokemon
            poke={poke}
            key={poke.name}
            data-testid="single-pokemon"
            isShiny={isShiny}
          />
        );
      })}
    </section>
  );
};
export default AllPokemon;
