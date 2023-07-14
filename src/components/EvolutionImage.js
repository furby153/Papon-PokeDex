import React from "react";
import pokeball from "../images/pokeball.png"

class EvolutionImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageError: false, // Add imageError state to track if the image fails to load
        };
      }

    handleImageError = () => {
        this.setState({ imageError: true });
    };

    render() {
        const { id } = this.props;
        const widthHeight = 125;
        const { imageError } = this.state;
        return (
            <div>
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
                
            </div>
        );
    }

}

export default EvolutionImage;