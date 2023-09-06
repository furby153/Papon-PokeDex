import React from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            searchfield: '',
            isPokemonSelected: true,
        }
    }

    async componentDidMount() {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const data = await resp.json();
        const result = [...data.results];
        result.forEach((item) => {
            const arrForID = item.url.split('/');
            item.id = arrForID[arrForID.length-2];
        })
        this.setState({ pokemons: result})
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    handleToggleChange = () => {
        this.setState((prevState) => ({
          isPokemonSelected: !prevState.isPokemonSelected,
        }));
    };

    render(){
        const { pokemons, searchfield, isPokemonSelected  } = this.state;
        const filteredPokemons = pokemons.filter( inputPokemon => {
            return (
                //search by name
                inputPokemon.name.toLowerCase().includes(searchfield.toLowerCase())
                ||
                //searh by id
                inputPokemon.id.toLowerCase().includes(searchfield.toLowerCase())
            );
        })
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
                    {isPokemonSelected && <CardList pokemons={filteredPokemons} />}
                </ErrorBoundary>
            </Scroll>
            </div>  
        );
        } 
    
}

export default App;