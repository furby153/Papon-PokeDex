import Details from "../showByPokemon/Details";

const ChangIdToUseWithDetails = ({id}) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return (
        <div>
            <Details url = {url}
        />
        </div>
    )
}

export default ChangIdToUseWithDetails;