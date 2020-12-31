import React from 'react';

const weatherDisplay = (props) => {
    const weather = props.weather;
    
    return(
        <div>
            {(typeof weather.main != 'undefined') ? 
                <div>
                    <div>
                        <p>{weather.name}, {weather.sys.country}</p>
                        <p>{props.getDate}</p>
                    </div>
                    <div>
                        <p>{weather.weather[0].main}</p>
                        <p>{Math.round(weather.main.temp)}&deg;</p>
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