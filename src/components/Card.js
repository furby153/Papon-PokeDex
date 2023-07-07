import React from "react";
import './Card.css';
import Details from "./Details";
import pokeball from "../images/pokeball.png"

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showDetails: false,
          imageError: false, // Add imageError state to track if the image fails to load
        };
      }

    handleClick = () => {
        this.setState((prevState) => ({
          showDetails: !prevState.showDetails,
        }));
    };

    // handleMouseEnter = () => {
    //     this.setState(() => ({
    //         showDetails: true,
    //       }));
    // }

    // handleMouseLeave = () => {
    //     this.setState(() => ({
    //         showDetails: false,
    //       }));
    // }

    handleImageError = () => {
        this.setState({ imageError: true });
    };

    render() {
        const { name, url, id } = this.props;
        const { showDetails, imageError } = this.state;
        
        return (
            <div 
                className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'
                onClick={this.handleClick} // Add the click event handler
                // onMouseEnter={this.handleMouseEnter}
                // onMouseLeave={this.handleMouseLeave}
            >
                {imageError ? ( // Render alternate image if there was an error
                    <img
                        src={pokeball} //
                        alt='Sorry! Pic is unavailable for this Pokémon'
                        width={200}
                        height={200}
                    />
                ) : (
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                        alt='Sorry! Pic is unavailable for this Pokémon'
                        width={200}
                        height={200}
                        onError={this.handleImageError} // Add the onError event handler
                    />
                )}
                <div>
                    <h2>{name}</h2>
                    <h5>PokéID: {id}</h5>
                    {/* Render the Details component conditionally */}
                    {showDetails && <Details url={url} />}
                </div>
            </div>
        );
    }
}

export default Card;