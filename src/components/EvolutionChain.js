import React, { Component } from 'react';
import EvolutionChainDetails from './EvolutionChainDetails';

class EvolutionChain extends Component {
    constructor(props) {
      super(props);
      this.state = {
        evolutionChain: null,
      };
    }
  
    async componentDidMount() {
      // Fetch data from the URL
      try {
        const response = await fetch(this.props.speciesURL);
        const speciesData = await response.json();
        const response2 = await fetch(speciesData.evolution_chain.url);
        const evoChain  = await response2.json();
        this.setState({ evolutionChain: evoChain });
      } catch(error) {
          console.log('Error fetching details:', error);
      }
    }
  
    render() {
      const { evolutionChain } = this.state;
  
      if (!evolutionChain) {
        return <div className='tc ba b--blue br3 ph3 bg-lightest-blue stats'>Loading...</div>;
      }
  
      // Render the fetched details
      return (
        <div div className='tc ba b--blue br3 ph3 bg-lightest-blue stats'>
          <h5>Pokémon Evolution Chain</h5>
          <EvolutionChainDetails evolution={evolutionChain.chain} />
          {/* <p>{evolutionChain.chain.species.name}</p> */}
        </div>
      );
    }
  }
  
  export default EvolutionChain;