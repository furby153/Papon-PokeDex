import React from "react";
import './Card.css';

class Card extends React.Component {
    render() {
        const { name, url, id } = this.props;
        
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt='Sorry! Pic is unavailable for this Pokémon' width={200} height={200} />
                <div>
                    <h2>{name}</h2>
                    <h5>PokéID: {id}</h5>
                    <p>{url}</p>
                </div>
            </div>
        );
    }
}

export default Card;