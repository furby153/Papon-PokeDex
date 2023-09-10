import React from "react";
import CardList from "./CardList";

const FilteredPokemonList = ({ pokemons, searchfield }) => {
  const filteredPokemons = pokemons.filter((inputPokemon) => {
    return (
      //search by name
      inputPokemon.name.toLowerCase().includes(searchfield.toLowerCase()) 
      //search by exact id
      || inputPokemon.id.toLowerCase() === searchfield.toLowerCase()
      //search by id
      // || inputPokemon.id.toLowerCase().includes(searchfield.toLowerCase())
    );
  });

  return <CardList pokemons={filteredPokemons} />;
};

export default FilteredPokemonList;
