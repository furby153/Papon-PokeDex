import React from "react";
import ShowEvolutionsDetails from "./ShowEvolutionsDetails";

class ShowEvolutions extends React.Component {
    constructor(){
        super();
        this.state ={
            showEvolutions: true,
            evolutionChain: null,
        }
    }

    handleShowEvolutionsClick = () => {
        this.setState((prevState) => ({
            showEvolutions: !prevState.showEvolutions,
        }));
    };

    async componentDidMount() {
        // Fetch data from the URL
        try {
          const response = await fetch(this.props.url);
          const evoChain = await response.json();
          this.setState({ evolutionChain: evoChain });
        } catch(error) {
            console.log('Error fetching details:', error);
        }
      }

    render() {
        const { showEvolutions, evolutionChain } = this.state;

        if (!evolutionChain) {
            return <div className='tc ba b--blue br3 ph3 bg-lightest-blue stats'>Loading...</div>;
        }

        return(
            <div>
                {showEvolutions ? (
                    <>
                        <ShowEvolutionsDetails 
                            evolution={evolutionChain.chain}
                        />
                    </>
                ) : (
                    <>
                        
                    </>
                )
                }
                <button 
                    className={`showDetailsButton ${showEvolutions ? "redHover" : "greenHover"} w-40`}
                    onClick={this.handleShowEvolutionsClick}
                >
                    {showEvolutions ? 'Hide evolution details' : 'Show evolution details'}
                </button>
            </div>
        );
    }

}

export default ShowEvolutions;