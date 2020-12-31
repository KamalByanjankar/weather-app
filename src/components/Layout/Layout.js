import React from 'react';
import Weather from '../Weather/Weather';

import './Layout.css';

const layout = (props) => {
    return(
        <div>
            <h1>Weather Forecast</h1>
            <Weather />
        </div>
    )
}

export default layout;