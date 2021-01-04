import React from 'react';
import { WiThunderstorm, WiRainMix, WiRain, WiSnow, WiFog, WiDaySunny, WiCloudy } from 'weather-icons-react';

import classes from './WeatherIcon.module.css';

const weatherIcon = (props) => {
    let weatherIcon = null;
    let weatherId = props.weatherId;

    switch(true){
        case weatherId >= 200 && weatherId <= 232:
            weatherIcon =  <WiThunderstorm className={classes.Size} color='#ccc' />;
            break;

        case weatherId >= 300 && weatherId <= 321:
            weatherIcon = <WiRainMix className={classes.Size} color='#ccc' />;
            break;

        case weatherId >= 500 && weatherId <= 531:
            weatherIcon = <WiRain className={classes.Size} color='#ccc' />;
            break;

        case weatherId >= 600 && weatherId <= 622:
            weatherIcon = <WiSnow className={classes.Size} color='#ccc' />;
            break;

        case weatherId >= 701 && weatherId <= 781:
            weatherIcon = <WiFog className={classes.Size} color='#ccc' />;
            break;

        case weatherId === 800:
            weatherIcon = <WiDaySunny className={classes.Size} color='#ccc' />;
            break;

        case weatherId >= 801 && weatherId <= 804:
            weatherIcon = <WiCloudy className={classes.Size} color='#ccc' />
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