import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Weather from '../Weather/Weather';

const layout = (props) => {
    return(
        <div>
            <h1>Weather Forecast</h1>
            <Searchbar />
            <Weather />
        </div>
    )
}

export default layout;