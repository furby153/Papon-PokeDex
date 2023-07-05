import React from "react";
import Card from "./Card";

const CardList = ( { pokemons } ) => {
    return (
        <div>
            {
                pokemons.map((user, i) => {
                    return (
                        <Card 
                            key={pokemons[i].id} 
                            id={pokemons[i].id} 
                            name={pokemons[i].name} 
                            url={pokemons[i].url}
                            height={pokemons[i].height}
                            weight={pokemons[i].weight}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;