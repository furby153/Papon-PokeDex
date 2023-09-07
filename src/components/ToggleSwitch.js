import React, { Component } from 'react';

class ToggleSwitch extends Component {
  render() {
    const { isPokemonSelected, handleToggleChange } = this.props;

    return (
      <div className="toggle-container">
        <p className="pokemonfont">Show by</p>
        <input
          id="toggle-on"
          className="toggle toggle-left"
          name="toggle"
          value="false"
          type="radio"
          checked={isPokemonSelected}
          onChange={handleToggleChange}
        />
        <label htmlFor="toggle-on" className="togglebtn">
          Pokémon
        </label>
        <input
          id="toggle-off"
          className="toggle toggle-right"
          name="toggle"
          value="true"
          type="radio"
          checked={!isPokemonSelected}
          onChange={handleToggleChange}
        />
        <label htmlFor="toggle-off" className="togglebtn">
          Evolution
        </label>
      </div>
    );
  }
}

export default ToggleSwitch;
