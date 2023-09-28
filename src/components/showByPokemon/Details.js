import React, { Component } from 'react';
import Stats from './Stats';
import EvolutionChain from './EvolutionChain/EvolutionChain';
import './Details.css';

const LoadingMessage = () => <div>Loading...</div>;

const ShowHideSection = ({ buttonText, isShown, onClick, children }) => (
  <div className='mv2'>
    <button
      className={`showEachDetailsButton ${isShown ? 'redHover' : 'greenHover'}`}
      onClick={onClick}
    >
      {isShown ? 'Hide' : buttonText}
    </button>
    {isShown && children}
  </div>
);

class Details extends Component {
  state = {
    details: null,
    showHeightAndWeight: false,
    showStats: false,
    showEvolutionChain: false,
    isByChain: null,
  };

  async componentDidMount() {
    try {
      const response = await fetch(this.props.url);
      const data = await response.json();
      this.setState({ details: data });

      if (this.props.isByChain === 'true') {
        this.setState({ 
                        isByChain: true,
                        showHeightAndWeight: true,
                        showStats: true,
                      });
      } else if (this.props.isByChain === 'false'){
        this.setState({ isByChain: false });
      }
    } catch (error) {
      console.log('Error fetching details:', error);
    }
  }

  toggleSection = (section) => {
    this.setState((prevState) => ({
      [section]: !prevState[section],
    }));
  };

  render() {
    const { details, showStats, showEvolutionChain, showHeightAndWeight, isByChain } = this.state;

    if (!details) {
      return <LoadingMessage />;
    }

    return (
      <div className="details-container">
        <ShowHideSection
          buttonText="Height & Weight"
          isShown={showHeightAndWeight}
          onClick={() => this.toggleSection('showHeightAndWeight')}
          children={
            <div className="tc ba b--blue br3 ph3 bg-lightest-blue stats">
              <p className="heightAndWeight">Height: {details.height}</p>
              <p className="heightAndWeight">Weight: {details.weight}</p>
            </div>
          }
        />

        <ShowHideSection
          buttonText="Status"
          isShown={showStats}
          onClick={() => this.toggleSection('showStats')}
          children={
            <Stats stats={details.stats} />
          }
        />
        
        { !isByChain &&
          <ShowHideSection
          buttonText="Evolution Chain"
          isShown={showEvolutionChain}
          onClick={() => this.toggleSection('showEvolutionChain')}
          children={
            <EvolutionChain speciesURL={details.species.url} />
          }
          />
        }

        {/* Add more details as needed */}
      </div>
    );
  }
}

export default Details;