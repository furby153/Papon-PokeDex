import React from "react";
import './Card.css';
import Details from "./Details";
import pokeball from "../images/pokeball.png";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            imageError: false,
        };
    }

    // Toggle the showDetails state on card click
    handleClick = () => {
        const { showDetails } = this.state;
        if (!showDetails) {
            this.setState({ showDetails: true });
        }
    };

    // Toggle the showDetails state on the "Show Details" button click
    handleShowDetailsClick = () => {
        this.setState((prevState) => ({
            showDetails: !prevState.showDetails,
        }));
    };

    // Handle image loading error by showing the alternate image
    handleImageError = () => {
        this.setState({ imageError: true });
    };

    // Generate the image URL for the given Pokemon ID
    getImageUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    render() {
        const { name, url, id } = this.props;
        const { showDetails, imageError } = this.state;
        const widthHeight = 200;

        return (
            <div
                className={`tc bg-light-green dib br3 pa3 ma2 ${showDetails ? '' : 'grow'} ${showDetails ? '' : 'onCardHover'} bw2 shadow-5`}
                onClick={this.handleClick}
            >
                {/* Render the appropriate image based on imageError */}
                <img
                    src={imageError ? pokeball : this.getImageUrl(id)}
                    alt='Sorry! Pic is unavailable for this Pokémon'
                    width={widthHeight}
                    height={widthHeight}
                    onError={this.handleImageError}
                />
                <div>
                    <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                    <h5>PokéID: {id}</h5>
                </div>
                <div>
                    {/* Conditional rendering for the "Show Details" button and Details component */}
                    {showDetails ? (
                        <>
                            <button
                                className={`showDetailsButton ${showDetails ? "redHover" : "greenHover"}`}
                                onClick={this.handleShowDetailsClick}
                            >
                                Hide Details
                            </button>
                            <Details url={url} />
                        </>
                    ) : (
                        <p>Click to show details</p>
                    )}
                </div>
            </div>
        );
    }
}

export default Card;
