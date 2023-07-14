import React from "react";

const Stats = ( { stats } ) => {
    return (
        <div className='tl ba b--blue br3 ph3 bg-lightest-blue stats'>
            <h4>Base Status</h4>
            {stats.map((stats, index) => ( //Loop for react instead of <p> {stats[i].stat.name} : {stats[i].base_stat} </p>
                <p key={index}>
                    {stats.stat.name}: {stats.base_stat}
                </p>
            ))}
        </div>
    );
}

export default Stats;