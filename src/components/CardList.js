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
                            name={pokemons[i].name} 
                            url={pokemons[i].url}
                            id={pokemons[i].id} 
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;