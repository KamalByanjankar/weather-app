import React from 'react';
import Weather from '../Weather/Weather';

import classes from './Layout.module.css';

const layout = (props) => {
    return(
        <div className={classes.Layout}>
            <h1>Weather Forecast</h1>
            <Weather />
        </div>
    )
}

export default layout;