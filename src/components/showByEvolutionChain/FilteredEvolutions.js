import React from "react";
import evolutionDetails from "./evolutionDetails";
import CardEvolution from "./CardEvolution"

const FilteredEvolutions = ({ 
                            // evolutionChains, 
                            searchfield }) => {



    const filterData = (input) => {
        const filteredChains = [];
        evolutionDetails.forEach(chain => {
            const matchingPokemon = chain.pokemon.find(pokemon => (
                pokemon.name.toLowerCase().includes(input.toLowerCase()) ||
                pokemon.id.toString().toLowerCase().includes(input.toLowerCase()) 
            ))
            if (matchingPokemon) {
                filteredChains.push(chain.chainId);
            }
        })
        console.log(filteredChains);
        return filteredChains;
    }

    const filteredChainsResult = filterData(searchfield);

    return filteredChainsResult;
    // return (
    //     <div>
    //         {
    //             filteredChainsResult.map((user, i) => {
    //                 return (
    //                     <CardEvolution 
    //                         key={filteredChainsResult[i].chainId} 
    //                         url={filteredChainsResult[i].url}
    //                         evolutionChains={filteredChainsResult[i].chainId} 
    //                     />                        
    //                 );
    //             })
    //         }
    //     </div>
    // );
}

export default FilteredEvolutions;