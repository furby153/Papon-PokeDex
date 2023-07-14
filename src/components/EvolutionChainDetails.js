import React from 'react';
import EvolutionLeveling from './EvolutionLeveling';
import EvolutionImage from './EvolutionImage';

function EvolutionChainDetails({ evolution }) {
  if (!evolution) {
    return null;
  }

  const { name, url } = evolution.species;
  const arrForID = url.split('/');
  const pokeID = arrForID[arrForID.length-2]; 
  return (
    <div>
      <EvolutionLeveling 
        leveling={evolution.evolution_details[0]}
      />
      <EvolutionImage id={pokeID}/>
      <p className='pokemonName'>{name.charAt(0).toUpperCase()+name.slice(1)}</p>
      <h5>PokéID: {pokeID}</h5>
      <EvolutionChainDetails evolution={evolution.evolves_to[0]} />
    </div>
  );
}

export default EvolutionChainDetails;
