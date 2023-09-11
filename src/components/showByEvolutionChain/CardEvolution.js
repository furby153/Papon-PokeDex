import React from "react";
import pokeball from "../../images/pokeball.png";
import './CardEvolution.css';

class CardEvolution extends React.Component {
    constructor() {
        super();
        this.state = {
            imageError: false,
        }
    }

    // Handle image loading error by showing the alternate image
    handleImageError = () => {
        this.setState({ imageError: true });
    };

    // Generate the image URL for the given Pokemon ID
    getImageUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    render() {
        const { url, chainId, pokemons } = this.props;
        const { imageError } = this.state;
        const widthHeight = 200;

        return (
            <div
            className={`tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-90`}
            >
                <p>Hello ,${chainId}, url is ${url} </p>
                {/* show pictures */}
                <div className="pokemon-card-by-evolution-container">
                    {pokemons.map((pokemon) => (
                        <div key={pokemon.id} className="pokemon-card">
                            <img
                                src={this.getImageUrl(pokemon.id)}
                                alt={pokemon.name}
                                onError={this.handleImageError}
                                width={widthHeight}
                                height={widthHeight}
                            />
                            {imageError && (
                                <img
                                    src={pokeball}
                                    alt="Error loading pic"
                                    width={widthHeight}
                                    height={widthHeight}
                                />
                            )}
                            <h2>{pokemon.name}</h2>
                            <h5>PokéID: {pokemon.id}</h5>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
            
}

export default CardEvolution;