import React from 'react';
import WeatherIcon from '../WeatherIcons/WeatherIcon';

import classes from "./WeatherDisplays.module.css";

const weatherDisplays = (props) => {
    const weather = props.weather;
    return(
        <div className={classes.Temperature}>
            <div>
                <WeatherIcon weatherId={weather.weather[0].id}/>
            </div>
            <div className={classes.Temp}>
                <p className={classes.Temp__degree}>{Math.round(weather.main.temp)}&deg;</p>
                <p>{weather.weather[0].main}</p>
            </div>
        </div>  
    )
}

export default weatherDisplays;