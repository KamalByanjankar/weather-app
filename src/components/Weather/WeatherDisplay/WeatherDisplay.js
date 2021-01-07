import React from 'react';
import WeatherDisplays from './WeatherDisplays/WeatherDisplays';
import WeatherDetails from './WeatherDetails/WeatherDetails';

import classes from './WeatherDisplay.module.css';

const weatherDisplay = (props) => {
    const weather = props.weather;
    return(
        <div className={classes.WeatherDisplay}>
            {(typeof weather.main != 'undefined') ? 
                <div>
                    <p className={classes.Name}>{weather.name}, {weather.sys.country}</p>
                    <p>{props.getDate}</p>

                    <div className={classes.Display}>
                        <WeatherDisplays weather={props.weather}/>
                    
                        <WeatherDetails 
                            weather={props.weather} 
                            sunrise={props.sunrise}
                            sunset={props.sunset}
                        />
                    </div>
                </div>  : ('')}             
        </div>
    )
}

export default weatherDisplay;