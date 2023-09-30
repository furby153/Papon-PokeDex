import React, { useState, useEffect } from "react";
import EvolutionLevelingHorizontal from "./EvolutionLevelingHorizontal";
import EvolutionImage from "../showByPokemon/EvolutionChain/EvolutionImage";

function ShowEvolutionsDetails({ evolution }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check the window width when the component mounts
        const handleResize = () => {
            setIsMobile(window.innerWidth < 809);
        };

        // Add a listener for window resize
        window.addEventListener("resize", handleResize);

        // Check window width initially
        handleResize();

        // Cleanup the listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!evolution) {
        return null;
    }

    const { url } = evolution.species;
    const arrForID = url.split('/');
    const pokeID = arrForID[arrForID.length-2];

    const containerClassName = isMobile
    ? "evolution-details-vertical"
    : "pokemon-card-by-evolution-container";

    return (
        <div className={containerClassName}>
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