import React from 'react';

function EvolutionLeveling({ leveling }) {
  if (!leveling) {
    return null;
  }

  const evolutionType = leveling.trigger.name;
  let evolutionMethodDetails;

  if (evolutionType === 'level-up') {
    const { min_level,min_happiness } = leveling;
    if (!min_happiness && min_level) {
      evolutionMethodDetails = (
        <>
          <p className='evolutionCondition'>Minimum Level: {min_level}</p>
        </>
      );
    } else if (min_happiness && !min_level) {
      evolutionMethodDetails = (
        <>
          <p className='evolutionCondition'>Minimum Happpiness: {min_happiness}</p>
        </>
      );
    }
    
  } else if (evolutionType === 'trade') {
    evolutionMethodDetails = (
      <>
        <p className='evolutionCondition'>Trade Pokémon with other players</p>
      </>
    );
  } else if (evolutionType === 'use-item') {
    const evolutionItem = leveling.item.name;
    evolutionMethodDetails = (
      <>
        <p className='evolutionCondition'>Use item: {evolutionItem.charAt(0).toUpperCase() + evolutionItem.slice(1)}</p>
      </>
    );
  } else {
    evolutionMethodDetails = (
      <>
      </>
    );
  }

  return <div>
    <h4>Evolution method: {evolutionType.toUpperCase()}</h4>
    {evolutionMethodDetails}
    </div>;
}

export default EvolutionLeveling;
