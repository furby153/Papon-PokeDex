import React from "react";
import EvolutionLevelingHorizontal from "./EvolutionLevelingHorizontal";
import EvolutionImage from "../showByPokemon/EvolutionChain/EvolutionImage";

function ShowEvolutionsDetails({ evolution }) {
    if (!evolution) {
        return null;
    }

    const { url } = evolution.species;
    const arrForID = url.split('/');
    const pokeID = arrForID[arrForID.length-2];

    return (
        <div className="pokemon-card-by-evolution-container">
            <EvolutionLevelingHorizontal 
                leveling={evolution.evolution_details[0]}
            />
            <EvolutionImage
                id={pokeID}
            />
            <ShowEvolutionsDetails
                evolution={evolution.evolves_to[0]}
            />
        </div>
    );

}

export default ShowEvolutionsDetails;