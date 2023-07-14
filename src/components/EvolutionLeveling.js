import React from 'react';

function EvolutionLeveling({ leveling }) {
  if (!leveling) {
    return null;
  }
  const { min_level } = leveling;

  return (
    <div>
      <p>Minimum Level: {min_level}</p>
    </div>
  );
}

export default EvolutionLeveling;