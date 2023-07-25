import React from "react";
import './Card.css';
import Details from "./Details";
import pokeball from "../images/pokeball.png"

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            imageError: false,
            // firstClick: true, // Add firstClick state to track if it's the first click on the card
        };
    }

    handleClick = () => {
        const { showDetails} = this.state;
        if (!showDetails) {
            this.setState({
                showDetails: true,
            });
        }
    };
    
    handleShowDetailsClick = () => {
        this.setState((prevState) => ({
            showDetails: !prevState.showDetails,
        }));
    };

    handleImageError = () => {
        this.setState({ imageError: true });
    };


    render() {
        const { name, url, id } = this.props;
        const { showDetails, imageError } = this.state;
        const widthHeight = 200;
        
        return (
            <div 
                className={`tc bg-light-green dib br3 pa3 ma2 ${showDetails ? '' : 'grow'} ${showDetails ? '' : 'onCardHover'} bw2 shadow-5`}
                onClick={this.handleClick} // Add the click event handler
            >
                {imageError ? ( // Render alternate image if there was an error
                    <img
                        src={pokeball} //
                        alt='Sorry! Pic is unavailable for this Pokémon'
                        width={widthHeight}
                        height={widthHeight}
                    />
                ) : (
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                        alt='Sorry! Pic is unavailable for this Pokémon'
                        width={widthHeight}
                        height={widthHeight}
                        onError={this.handleImageError} // Add the onError event handler
                    />
                )}
                <div>
                    <h2>{name.charAt(0).toUpperCase()+name.slice(1)}</h2>
                    <h5>PokéID: {id}</h5>
                </div>
                <div>
                    {!showDetails && <p>Click to show details</p>}
                    {
                        showDetails && 
                        <button 
                            className={`showDetailsButton ${showDetails ? "redHover" : "greenHover"}`}
                            onClick={this.handleShowDetailsClick}
                        >
                            {showDetails ? "Hide Details" : "Click to show details"}
                        </button>
                    }
                    {showDetails && <Details url={url} />}
                </div>
            </div>
        );
    }
}

export default Card;