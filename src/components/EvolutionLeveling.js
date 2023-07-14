import React from 'react';

function EvolutionLeveling({ leveling }) {
  if (!leveling) {
    return null;
  }
    const evolutionType = leveling.trigger.name;
  
  if ( evolutionType === 'level-up') {
    const { min_level } = leveling;
    return (
      <div>
        <h4>Evolution method: {evolutionType.toUpperCase()}</h4>
        <p className='evolutionCondition'>Minimum Level: {min_level}</p>
      </div>
    );
  } else if (evolutionType === 'trade') {
    return (
    <div>
      <h4>Evolution method: {evolutionType.toUpperCase()}</h4>
    </div>
    );
  } else if (evolutionType === 'use-item') {
    const evolutionItem = leveling.item.name;
    return (
      <div>
        <h4>Evolution method: {evolutionType.toUpperCase()}</h4>
        <p className='evolutionCondition'>Item: {evolutionItem}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h4>Evolution method: {evolutionType.toUpperCase()}</h4>
      </div>
    );
  }
  
}

export default EvolutionLeveling;