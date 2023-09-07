import React from "react";
import SearchBox from "../components/SearchBox";
import FilteredPokemonList from "../components/FilteredPokemons";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            evolutionChains: [],
            searchfield: '',
            isPokemonSelected: true,
            isEvolutionSelected: false,
        }
    }

    async componentDidMount() {
        // FOR pokemon
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const data = await resp.json();
        const result = [...data.results];
        result.forEach((item) => {
            const arrForID = item.url.split('/');
            item.id = arrForID[arrForID.length-2];
        })
        // console.log(result);
        this.setState({ pokemons: result})  

        // FOR evolutionChains
        const responseForEvolutionchains = await fetch('https://pokeapi.co/api/v2/evolution-chain?limit=10000&offset=0'); 
        const evolutionChainsData = await responseForEvolutionchains.json();
        const evolutionChains = [...evolutionChainsData.results];
        evolutionChains.forEach((item) => {
            const arrForID = item.url.split('/');
            item.chainId = arrForID[arrForID.length-2];
        });
        // console.log(evolutionChains);
        this.setState({ evolutionChains: evolutionChains});
        
    };

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    handleToggleChange = () => {
        this.setState((prevState) => ({
          isPokemonSelected: !prevState.isPokemonSelected,
          isEvolutionSelected: !prevState.isEvolutionSelected,
        }));
    };

    render(){
        const { pokemons, searchfield, isPokemonSelected, isEvolutionSelected } = this.state;
        return !pokemons.length ?
        <h1 className='tc f1'>Loading</h1> :
        (
            <div className="tc">
            <h1 className="f1">PokéDex</h1>
            <div className="toggle-container">
                <p className="pokemonfont">Show by</p>
                <input
                    id="toggle-on"
                    className="toggle toggle-left"
                    name="toggle"
                    value="false"
                    type="radio"
                    checked={this.state.isPokemonSelected}
                    onChange={this.handleToggleChange}
                />
                <label htmlFor="toggle-on" className="togglebtn">Pokémon</label>
                <input
                    id="toggle-off"
                    className="toggle toggle-right"
                    name="toggle"
                    value="true"
                    type="radio"
                    checked={!this.state.isPokemonSelected}
                    onChange={this.handleToggleChange}
                />
                <label htmlFor="toggle-off" className="togglebtn">Evolution</label>
            </div>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    {isPokemonSelected && <FilteredPokemonList pokemons={pokemons} searchfield={searchfield} />}
                    {isEvolutionSelected && `This page will be show soon`}
                </ErrorBoundary>
            </Scroll>
            </div>  
        );
        } 
    
}

export default App;