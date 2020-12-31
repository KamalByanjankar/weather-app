import React from 'react';
import WeatherIcon from '../WeatherIcons/WeatherIcon';

import classes from './WeatherDisplay.module.css';

const weatherDisplay = (props) => {
    const weather = props.weather;
    
    return(
        <div>
            {(typeof weather.main != 'undefined') ? 
                <div className={classes.Display}>
                    <div>
                        <div>
                            <p className={classes.Name}>{weather.name}, {weather.sys.country}</p>
                            <p>{props.getDate}</p>
                        </div>
                        <div>
                            <WeatherIcon weatherId={weather.weather[0].id}/>
                            <p>{weather.weather[0].main}</p>
                            <p>{Math.round(weather.main.temp)}&deg;</p>
                        </div>  
                    </div>
                    <div>
                        <p>High: {Math.round(weather.main.temp_max)}&deg;</p>
                        <p>Low: {Math.round(weather.main.temp_min)}&deg;</p>
                        <p>Humidity: {weather.main.humidity} %</p>
                        <p>Feels Like: {Math.round(weather.main.feels_like)}&deg;</p>
                        <p>Pressure: {weather.main.pressure} hPa</p>
                        <p>Visibility:{(weather.visibility)/1000} km</p>
                        <p>Sunrise: {props.sunrise(weather.sys.sunrise)}</p>
                        <p>Sunset: {props.sunrise(weather.sys.sunset)}</p>
                    </div>
                </div>  : ('')}             
        </div>
    )
}

export default weatherDisplay;