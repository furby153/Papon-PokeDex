import React from "react";
import pokeball from "../../images/pokeball.png";
import ChangeIdToUseWithDetails from "./ChangeIdToUseWithDetails";
import ShowEvolutions from "./ShowEvolutions";
import './CardEvolution.css';

class CardEvolution extends React.Component {
    constructor() {
        super();
        this.state = {
            showDetails: false,
            imageErrors: [],
            isMobile: window.innerWidth < 809,
        }

        // Add an event listener to update screenWidth when the window is resized
        window.addEventListener('resize', this.handleResize);
    }

    // Event handler for window resize
    handleResize = () => {
        this.setState({ isMobile: window.innerWidth < 809});
    };

    // Don't forget to remove the event listener when the component unmounts
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
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

    // Handle image loading error for a specific Pokemon
    handleImageError = (index) => {
        this.setState((prevState) => {
            const newImageErrors = [...prevState.imageErrors];
            newImageErrors[index] = true;
            return { imageErrors: newImageErrors };
        });
    };

    // Generate the image URL for the given Pokemon ID
    getImageUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    render() {
        // const { url, chainId, pokemons } = this.props;
        const { url, pokemons } = this.props;
        const { imageErrors, showDetails , isMobile } = this.state;
        const widthHeight = 200;
        const containerClassName = isMobile
        ? "evolution-details-vertical"
        : "pokemon-card-by-evolution-container";

        return (
            <div
                className={`tc bg-light-green dib br3 pa3 ma2 ${showDetails ? '' : 'grow'} ${showDetails ? '' : 'onCardHover'} bw2 shadow-5 w-90`}
                onClick={this.handleClick}
            >
                {/* <p>Hello ,{chainId}, url is {url} </p> */}
                {/* show pictures */}
                <div className={containerClassName}>
                    {pokemons.map((pokemon, index) => (
                        <div key={pokemon.id} className="pokemon-card">
                            {imageErrors[index] ? (
                                <img
                                    src={pokeball}
                                    alt="Sorry! Pic is unavailable for this Pokémon"
                                    width={widthHeight}
                                    height={widthHeight}
                                />
                            ) : 
                                <img
                                    src={this.getImageUrl(pokemon.id)}
                                    alt={pokemon.name}
                                    onError={() => this.handleImageError(index)}
                                    width={widthHeight}
                                    height={widthHeight}
                                />
                            }
                            <h2>{pokemon.name}</h2>
                            <h5>PokéID: {pokemon.id}</h5>
                            {showDetails && 
                                <ChangeIdToUseWithDetails id={pokemon.id}
                            />}
                        </div>
                    ))}
                </div>
            
                {showDetails && <ShowEvolutions url={url}/>}  

                <div className="pa3">
                    {showDetails ? (
                        <button 
                            className={`showDetailsButton ${showDetails ? "redHover" : "greenHover"}`}
                            onClick={this.handleShowDetailsClick}
                        >
                            Hide details
                        </button>
                    ) : (
                        <p>Click to show details</p>
                    )
                    }
                </div>

            </div>
        );
    }
            
}

export default CardEvolution;