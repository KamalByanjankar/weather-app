import React, { useState } from 'react';
// import axios from 'axios';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';
import Form from '../../components/Form/Form';
import Layout from '../Layout/Layout';
import classes from './Weather.module.css';


const API_KEY = "2c190e833a80ec82eb4bf050a1da5404";

function Weather(){
    const [weather, setWeather] = useState([]);

    const dateBuilder = (d) => {
        let months= ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];
        let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day}, ${date} ${month} ${year}`
    }

    // componentDidMount(){
    //     axios.get(url)
    //         .then(response => {
    //             // console.log(response)
    //             this.setState({
    //                 weather: response.data
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    const convertTime = (time) => {
        let date = new Date(time * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let formattedTime = null;

        if(hours < 10){
            formattedTime ='0'+ hours + ':' + minutes
        }

        else if(minutes < 10){
            formattedTime = hours + ':0' + minutes
        }

        else{
            formattedTime = hours + ':' + minutes
        }

        // console.log(formattedTime)
        return formattedTime;
    }

    const submitFormHandler = async (event) => {
        event.preventDefault();
        let city = event.target.elements.cityName.value;

        const api_call = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

        const data = await api_call.json();

        if(api_call.status !== 200){
            alert('Please Enter valid city name');
            console.clear();
        }

        setWeather(data);
        event.target.elements.cityName.value= "";
    }

    let background = null;
    const hours = new Date().getHours()
    if(hours >= 7 && hours < 17){
        background= classes.Day;
    }
    else{
        background= classes.Night;
    }

    return ( 
        <div className={classes.Weather}>
            <div className={background}>
                <Layout />
                <Form submitForm={submitFormHandler}/>
                <WeatherDisplay 
                    weather={weather}
                    getDate={dateBuilder(new Date())}
                    sunrise={convertTime}
                    sunset={convertTime}
                />
            </div>
        </div>
    );
}
 
export default Weather;