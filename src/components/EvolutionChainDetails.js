import React from 'react';
import EvolutionLevel from './EvolutionLevel';

function EvolutionChainDetails({ evolution }) {
  if (!evolution) {
    return null;
  }

  const { name, url } = evolution.species;
  return (
    <div>
      <EvolutionLevel level={evolution.evolution_details[0]}/>
      <p>Name: {name.charAt(0).toUpperCase()+name.slice(1)}</p>
      <p>{url}</p>
      <EvolutionChainDetails evolution={evolution.evolves_to[0]} />
    </div>
  );
}

export default EvolutionChainDetails;
