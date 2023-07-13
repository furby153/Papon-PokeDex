import React, { Component } from 'react';
import Stats from './Stats';
import EvolutionChain from './EvolutionChain';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
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

  render() {
    const { details } = this.state;

    if (!details) {
      return <div>Loading...</div>;
    }

    // Render the fetched details
    return (
      <div>
        <p className='heightAndWeight'>Height: {details.height}</p>
        <p className='heightAndWeight'>Weight: {details.weight}</p>
        <Stats stats={details.stats}/>
        <br/>
        {/* <p>Evolution Chain</p> */}
        <EvolutionChain speciesURL={details.species.url}/>
        {/* Add more details as needed */}
      </div>
    );
  }
}

export default Details;