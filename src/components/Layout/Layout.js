import React from 'react';
import Weather from '../Weather/Weather';

import classes from './Layout.module.css';

const layout = (props) => {

    let background = null;
    const hours = new Date().getHours()
    if(hours > 7 && hours < 16){
        background = classes.Day;
    }
    else{
        background= classes.Night;
    }

    return(
        <div className={classes.Layout}>
            <div className={background}>
                <h1 className={classes.header}>Weather App</h1>
                <Weather />
            </div>
        </div>
    )
}

export default layout;