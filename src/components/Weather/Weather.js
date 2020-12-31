import React, { Component } from 'react';
// import axios from 'axios';
import WeatherDisplay from './WeatherDisplay/WeatherDispaly';
import Form from '../../components/Form/Form';


const API_KEY = "2c190e833a80ec82eb4bf050a1da5404";

class Weather extends Component {
    state = { 
        weather: []
     }

    dateBuilder = (d) => {
        let months= ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];
        let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
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

    convertTime = (time) => {
        let date = new Date(time * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();

        let formattedTime = hours + ':' + minutes;
        return formattedTime;
    }

    submitFormHandler = async (event) => {
        event.preventDefault();
        let city = event.target.elements.cityName.value;

        const api_call = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

        const data = await api_call.json();
        this.setState({
            weather: data
        })
        // console.log(this.state.weather)
    }

    render() {
        return ( 
            <div>
                 <Form submitForm={this.submitFormHandler}/>
                <WeatherDisplay 
                    weather={this.state.weather}
                    getDate={this.dateBuilder(new Date())}
                    sunrise={this.convertTime}
                    sunset={this.convertTime}
                />
            </div>
        );
    }
}
 
export default Weather;