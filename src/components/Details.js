import React, { Component } from 'react';
import Stats from './Stats';
import EvolutionChain from './EvolutionChain';
import './Details.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      showStats: null,
      showEvolutionChain: null,
      showHeightAndWeight: false,
    };
  }

  async componentDidMount() {
    // Fetch data from the URL
    try {
        const response = await fetch(this.props.url)
        const data = await response.json();
        this.setState({ details: data});
        
    } catch(error) {
        console.log('Error fetching details:', error);
    }
  }

  handleClickShowHeightAndWeight = () => {
    this.setState((prevState) => ({
      showHeightAndWeight: !prevState.showHeightAndWeight,
    }));
  };

  handleClickShowStats = () => {
    this.setState((prevState) => ({
      showStats: !prevState.showStats,
    }));
  };

  handleClickShowEvolutionChain = () => {
    this.setState((prevState) => ({
      showEvolutionChain: !prevState.showEvolutionChain,
    }));
  };

  render() {
    const { details, showStats, showEvolutionChain, showHeightAndWeight } = this.state;

    if (!details) {
      return <div>Loading...</div>;
    }

    // Render the fetched details
    return (
      <div>
        <br/>
        <div>
          <button 
              className={`showEachDetailsButton ${showHeightAndWeight ? "redHover" : "greenHover"}`}
              onClick={this.handleClickShowHeightAndWeight}>
              {showHeightAndWeight ? "Hide" : "Height & Weight"}
          </button>
          {showHeightAndWeight && (
            <div className='tc ba b--blue br3 ph3 bg-lightest-blue stats'>
              <p className='heightAndWeight'>Height: {details.height}</p>
              <p className='heightAndWeight'>Weight: {details.weight}</p>
            </div>
          )}
        </div>
        
        <br/>
        <div>
          <button 
              className={`showEachDetailsButton ${showStats ? "redHover" : "greenHover"}`}
              onClick={this.handleClickShowStats}>
              {showStats ? "Hide" : "Status"}
          </button>
          {showStats && <Stats stats={details.stats}/>}
        </div>

        <br/>
        <div>
          <button 
              className={`showEachDetailsButton ${showEvolutionChain ? "redHover" : "greenHover"}`}
              onClick={this.handleClickShowEvolutionChain}>
              {showEvolutionChain ? "Hide" : "Evolution Chain"}
          </button>
          {showEvolutionChain && <EvolutionChain speciesURL={details.species.url}/>}
        </div>
        {/* Add more details as needed */}
      </div>
    );
  }
}

export default Details;