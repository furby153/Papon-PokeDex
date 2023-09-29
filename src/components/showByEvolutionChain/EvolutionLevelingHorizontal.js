import React, { Component } from 'react';
import { styled } from '@mui/system';
import { KeyboardDoubleArrowRight } from '@mui/icons-material';

class EvolutionLevelingHorizontal extends Component {

  render() {
    const { leveling } = this.props;

    if (!leveling) {
      return null;
    }

    const evolutionType = leveling.trigger.name;
    let evolutionMethodDetails;

    const ArrowRightIcon = styled(KeyboardDoubleArrowRight)``;

    if (evolutionType === 'level-up') {
      const { min_level, min_happiness } = leveling;
      if (!min_happiness && min_level) {
        evolutionMethodDetails = (
          <>
            <p className='evolutionCondition'>Minimum Level: {min_level}</p>
          </>
        );
      } else if (min_happiness && !min_level) {
        evolutionMethodDetails = (
          <>
            <p className='evolutionCondition'>Minimum Happiness: {min_happiness}</p>
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
          <p className='evolutionCondition'>{evolutionItem.charAt(0).toUpperCase() + evolutionItem.slice(1)}</p>
        </>
      );
    } else {
      evolutionMethodDetails = (
        <>
        </>
      );
    }

    return (
      <div>
        <p className='evolutionCondition'>{evolutionType.charAt(0).toUpperCase() + evolutionType.slice(1)}</p>
        <ArrowRightIcon/>
        {evolutionMethodDetails}
      </div>
    );
  }
}

export default EvolutionLevelingHorizontal;
