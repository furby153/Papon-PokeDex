import Details from "../showByPokemon/Details";

const ChangeIdToUseWithDetails = ({id}) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return (
        <div>
            <Details url = {url} isByChain='true'
        />
        </div>
    )
}

export default ChangeIdToUseWithDetails;