import React from 'react';
import classes from './WeatherDetails.module.css';

const weatherDetails = (props) => {
    const weather = props.weather;
    return(
        <div className={classes.WeatherDetails}>
            <div className={classes.Headings}>
                <div className={classes.Details}>
                    <h1>High</h1>
                    <p className={classes.Values}>{Math.round(weather.main.temp_max)}&deg;</p> 
                </div>
                <div>
                    <h1>Low</h1>
                    <p className={classes.Values}>{Math.round(weather.main.temp_min)}&deg;</p>
                </div>
            </div>
            <div className={classes.Headings}>
                <div className={classes.Details}> 
                    <h1>Humidity</h1>
                    <p className={classes.Values}>{weather.main.humidity} %</p>
                </div>
                <div>
                    <h1>Feels Like</h1>
                    <p className={classes.Values}>{Math.round(weather.main.feels_like)}&deg;</p>
                </div>
            </div>
            <div className={classes.Headings}>
                <div className={classes.Details}>
                    <h1>Pressure</h1>
                    <p className={classes.Values}>{weather.main.pressure} hPa</p>
                </div>
                <div>
                    <h1>Visibility</h1>
                    <p className={classes.Values}>{(weather.visibility)/1000} km</p>
                </div>
            </div>
            <div className={classes.Headings}>
                <div className={classes.Details}>
                    <h1>Sunrise</h1>
                    <p className={classes.Values}>{props.sunrise(weather.sys.sunrise)}</p>
                </div>
                <div>
                    <h1>Sunset</h1>
                    <p className={classes.Values}>{props.sunset(weather.sys.sunset)}</p>
                </div>
            </div>
        </div>
    )
}

export default weatherDetails;