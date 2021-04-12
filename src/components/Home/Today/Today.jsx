import React from 'react'

import './Today.scss';

const Today = ({city, country, deg}) => {
    return (
        <div className="today-box">
            <div className="today-box__location">{`${city}, ${country}`}</div>
            <div className="today-box__degrees">{deg}&deg;</div>
        </div>
    );
}

export default Today;