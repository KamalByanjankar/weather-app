import React from 'react';

const weatherDetails = (props) => {
    const weather = props.weather;
    return(
        <div>
            <p>HIGH </p>
            <p>{Math.round(weather.main.temp_max)}&deg;</p> 
            <p>Low: {Math.round(weather.main.temp_min)}&deg;</p>
            <p>Humidity: {weather.main.humidity} %</p>
            <p>Feels Like: {Math.round(weather.main.feels_like)}&deg;</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
            <p>Visibility:{(weather.visibility)/1000} km</p>
            <p>Sunrise: {props.sunrise(weather.sys.sunrise)}</p>
            <p>Sunset: {props.sunset(weather.sys.sunset)}</p>
        </div>
    )
}

export default weatherDetails;