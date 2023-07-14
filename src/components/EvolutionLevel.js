import React from 'react';

function EvolutionLevel({ level }) {
  if (!level) {
    return null;
  }
  const { min_level } = level;
  return (
    <div>
      <p>Minimum Level: {min_level}</p>
    </div>
  );
}

export default EvolutionLevel;