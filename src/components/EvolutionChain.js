import React, { Component } from 'react';

class EvolutionChain extends Component {
    constructor(props) {
      super(props);
      this.state = {
        evolutionchain: null,
      };
    }
  
    async componentDidMount() {
      // Fetch data from the URL
      try {
        const response = await fetch(this.props.speciesURL);
        console.log(this.props.speciesURL);
        const speciesData = await response.json();
        const response2 = await fetch(speciesData.evolution_chain.url);
        const evoChain  = await response2.json();
        this.setState({ evolutionchain: evoChain });
      } catch(error) {
          console.log('Error fetching details:', error);
      }
    }
  
    render() {
      const { evolutionchain } = this.state;
  
      if (!evolutionchain) {
        return <div className='tl ba b--blue br3 ph3 bg-lightest-blue stats'>Loading...</div>;
      }
  
      // Render the fetched details
      return (
        <div div className='tl ba b--blue br3 ph3 bg-lightest-blue stats'>
          <p>{evolutionchain.chain.species.name}</p>
        </div>
      );
    }
  }
  
  export default EvolutionChain;