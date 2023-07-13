import React from 'react';

function EvolutionChainDetails({ evolution }) {
  if (!evolution) {
    return null;
  }

  const { name } = evolution.species;
  // const { min_level } = evolution.evolution_details[0];
  return (
    <div>
      <p>Name: {name}</p>
      {/* <p>Minimum Level: {min_level}</p> */}
      <EvolutionChainDetails evolution={evolution.evolves_to[0]} />
    </div>
  );
}

export default EvolutionChainDetails;
