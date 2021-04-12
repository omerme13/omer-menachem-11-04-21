import React from 'react'

import './Today.scss';

const Today = ({city, country, deg}) => {
    return (
        <div className="today">
            <div className="today__location">{`${city}, ${country}`}</div>
            <div className="today__degrees">{deg}&deg;</div>
        </div>
    );
}

export default Today;