import React from "react";

class ShowEvolutions extends React.Component {
    constructor(){
        super();
        this.state ={
            showEvolutions: true,
        }
    }

    handleShowEvolutionsClick = () => {
        this.setState((prevState) => ({
            showEvolutions: !prevState.showEvolutions,
        }));
    };

    render() {
        const { url } = this.props;
        const { showEvolutions } = this.state;

        return(
            <div>
                {showEvolutions ? (
                    <>
                        <p>{url}</p>
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