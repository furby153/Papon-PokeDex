import React, { Component } from 'react';
import Stats from './Stats';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      evolutionChainState: null,
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

    // GET Evolution chain
        // const response2 = await fetch(this.details.species.url);
        // const speciesData = await response2.json();
        // const response3 = await fetch(speciesData.evolution_chain.url);
        // const evolutionChain = await response3.json();
        // this.setState({ evolutionChainState: evolutionChain});
  }

  render() {
    const { details,  
            //evolutionChainState
          } = this.state;

    if (!details) {
      return <div>Loading...</div>;
    }

    // Render the fetched details
    return (
      <div>
        <p className='heightAndWeight'>Height: {details.height}</p>
        <p className='heightAndWeight'>Weight: {details.weight}</p>
        <Stats stats={details.stats}/>
        {/* {EvolutionChain} */}
        {/* <p>{evolutionChainState.chain.evolves_to[0].species.name}</p> */}
        {/* Add more details as needed */}
      </div>
    );
  }
}

export default Details;