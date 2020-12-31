import React from 'react';
import { WiDayThunderstorm, WiDayRainMix, WiDayRain, WiDaySnow, WiDayFog, WiDaySunny, WiCloudy } from 'weather-icons-react';

import classes from './WeatherIcon.module.css';

const weatherIcon = (props) => {
    let weatherIcon = null;
    let weatherId = props.weatherId;

    switch(true){
        case weatherId >= 200 && weatherId <= 232:
            weatherIcon = <WiDayThunderstorm size={150} color='#ccc' />;
            break;

        case weatherId >= 300 && weatherId <= 321:
            weatherIcon = <WiDayRainMix size={150} color='#ccc' />;
            break;

        case weatherId >= 500 && weatherId <= 531:
            weatherIcon = <WiDayRain size={150} color='#ccc' />;
            break;

        case weatherId >= 600 && weatherId <= 622:
            weatherIcon = <WiDaySnow size={150} color='#ccc' />;
            break;

        case weatherId >= 701 && weatherId <= 781:
            weatherIcon = <WiDayFog size={150} color='#ccc' />;
            break;

        case weatherId === 800:
            weatherIcon = <WiDaySunny size={150} color='#ccc' />;
            break;

        case weatherId >= 801 && weatherId <= 804:
            weatherIcon = <WiCloudy size={150} color='#ccc' />;
            break;

        default:
            weatherIcon = null;
    }

    return(
        <div className={classes.WeatherIcon}>
            {weatherIcon}
        </div>
    )
}

export default weatherIcon;