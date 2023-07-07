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
            console.log(result);
            this.setState({ pokemons: result})
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const { pokemons, searchfield } = this.state;
        const filteredPokemons = pokemons.filter( inputPokemon => {
            return (
                //search by name
                inputPokemon.name.toLowerCase().includes(searchfield.toLowerCase())
            );
        })
        return !pokemons.length ?
        <h1 className='tc f1'>Loading</h1> :
        (
            <div className="tc">
            <h1 className="f1">PokeDex</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList pokemons={filteredPokemons}/>
                </ErrorBoundary>
            </Scroll>
            </div>  
        );
        } 
    
}

export default App;