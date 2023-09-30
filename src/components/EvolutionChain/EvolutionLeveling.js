import React, { Component } from 'react';
import { KeyboardDoubleArrowDown, KeyboardDoubleArrowRight } from '@mui/icons-material';

class EvolutionLeveling extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 809,
      isByChain: this.props.type !== 'byPokemon',
    };

    // Add an event listener to update screenWidth when the window is resized
    window.addEventListener('resize', this.handleResize);
  }

  // Event handler for window resize
  handleResize = () => {
    this.setState({ isMobile: window.innerWidth < 809});
  };

  // Don't forget to remove the event listener when the component unmounts
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { leveling } = this.props;
    const { isMobile, isByChain } = this.state;

    if (!leveling) {
      return null;
    }

    const evolutionType = leveling.trigger.name;
    let evolutionMethodDetails;

    const iconToRender = isMobile ? <KeyboardDoubleArrowDown /> : <KeyboardDoubleArrowRight />;

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
        {!isByChain && (<h5>Evolution method:</h5>)}
        <p className='evolutionCondition'>{evolutionType.charAt(0).toUpperCase() + evolutionType.slice(1)}</p>
        {!isMobile && isByChain && iconToRender}
        {evolutionMethodDetails}
        <div>
          {isMobile && isByChain && iconToRender}
          {!isByChain && <KeyboardDoubleArrowDown />}
        </div>
      </div>
    );
  }
}

export default EvolutionLeveling;
