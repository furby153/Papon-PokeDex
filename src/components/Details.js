import React, { Component } from 'react';
import Stats from './Stats';
import EvolutionChain from './EvolutionChain';
import './Details.css';

const LoadingMessage = () => <div>Loading...</div>;

const ShowHideSection = ({ buttonText, isShown, onClick, children }) => (
  <div>
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
  };

  async componentDidMount() {
    try {
      const response = await fetch(this.props.url);
      const data = await response.json();
      this.setState({ details: data });
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
    const { details, showStats, showEvolutionChain, showHeightAndWeight } = this.state;

    if (!details) {
      return <LoadingMessage />;
    }

    return (
      <div className="details-container">
        <br/>
        <ShowHideSection
          buttonText="Height & Weight"
          isShown={showHeightAndWeight}
          onClick={() => this.toggleSection('showHeightAndWeight')}
        >
          {showHeightAndWeight && (
            <div className="tc ba b--blue br3 ph3 bg-lightest-blue stats">
              <p className="heightAndWeight">Height: {details.height}</p>
              <p className="heightAndWeight">Weight: {details.weight}</p>
            </div>
          )}
        </ShowHideSection>

        <br/>
        <ShowHideSection
          buttonText="Status"
          isShown={showStats}
          onClick={() => this.toggleSection('showStats')}
        >
          {showStats && <Stats stats={details.stats} />}
        </ShowHideSection>

        <br/>
        <ShowHideSection
          buttonText="Evolution Chain"
          isShown={showEvolutionChain}
          onClick={() => this.toggleSection('showEvolutionChain')}
        >
          {showEvolutionChain && <EvolutionChain speciesURL={details.species.url} />}
        </ShowHideSection>

        {/* Add more details as needed */}
      </div>
    );
  }
}

export default Details;