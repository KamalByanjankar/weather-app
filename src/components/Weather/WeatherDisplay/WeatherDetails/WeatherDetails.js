import React from 'react';
import classes from './WeatherDetails.module.css';

const weatherDetails = (props) => {
    const weather = props.weather;
    return(
        <div className={classes.WeatherDetails}>
            <div className={classes.Headings}>
                <div className={classes.Details}>
                    <p>High</p>
                    <p className={classes.Values}>{Math.round(weather.main.temp_max)}&deg;</p> 
                </div>
                <div>
                    <p>Low</p>
                    <p className={classes.Values}>{Math.round(weather.main.temp_min)}&deg;</p>
                </div>
            </div>
            <div className={classes.Headings}>
                <div className={classes.Details}> 
                    <p>Humidity</p>
                    <p className={classes.Values}>{weather.main.humidity} %</p>
                </div>
                <div>
                    <p>Feels Like</p>
                    <p className={classes.Values}>{Math.round(weather.main.feels_like)}&deg;</p>
                </div>
            </div>
            <div className={classes.Headings}>
                <div className={classes.Details}>
                    <p>Pressure</p>
                    <p className={classes.Values}>{weather.main.pressure} hPa</p>
                </div>
                <div>
                    <p>Visibility</p>
                    <p className={classes.Values}>{(weather.visibility)/1000} km</p>
                </div>
            </div>
            <div className={classes.Headings}>
                <div className={classes.Details}>
                    <p>Sunrise</p>
                    <p className={classes.Values}>{props.sunrise(weather.sys.sunrise)}</p>
                </div>
                <div>
                    <p>Sunset</p>
                    <p className={classes.Values}>{props.sunset(weather.sys.sunset)}</p>
                </div>
            </div>
        </div>
    )
}

export default weatherDetails;