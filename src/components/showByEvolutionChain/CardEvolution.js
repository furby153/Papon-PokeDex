import React from "react";

class CardEvolution extends React.Component {
    constructor() {
        super();
        this.state = {
        
        }
    }

    render() {
        const { url, chainId} = this.props;
        return (
            <div
            className={`tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-90`}
            >
                Hello ,${chainId}, url is ${url}
            </div>
        );
    }
            
}

export default CardEvolution;