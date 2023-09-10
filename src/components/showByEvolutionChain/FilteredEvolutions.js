import React from "react";
import evolutionDetails from "./evolutionDetails";
import CardEvolution from "./CardEvolution"

const FilteredEvolutions = ({ searchfield }) => {

    const filterData = (input) => {
        const filteredChains = [];
        evolutionDetails.forEach(chain => {
            const matchingPokemon = chain.pokemon.find(pokemon => (
                //search by name
                pokemon.name.toLowerCase().includes(input.toLowerCase()) 
                //search by exact id
                || pokemon.id.toString().toLowerCase() === input.toLowerCase()
                //search by id
                // || pokemon.id.toString().toLowerCase().includes(input.toLowerCase()) 
            ))
            if (matchingPokemon) {
                filteredChains.push({
                    chainId: chain.chainId,
                    url: chain.url,
                });
            }
        })
        console.log(filteredChains);
        return filteredChains;
    }

    const filteredChainsResult = filterData(searchfield);

    return (
        <div>
            {
                filteredChainsResult.map((chain, i) => {
                    return (
                        <CardEvolution  
                            key={chain.chainId}
                            url={chain.url}
                            chainId={chain.chainId}
                        />                        
                    );
                })
            }
        </div>
    );
}

export default FilteredEvolutions;