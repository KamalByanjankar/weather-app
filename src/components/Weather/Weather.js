import React, { Component } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay/WeatherDispaly';


const url = "https://api.openweathermap.org/data/2.5/weather?q=Frankfurt&appid=2c190e833a80ec82eb4bf050a1da5404&units=metric"

class Weather extends Component {
    state = { 
        weather: {}
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

    componentDidMount(){
        axios.get(url)
            .then(response => {
                console.log(response)
                this.setState({
                    weather: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    convertTime = (time) => {
        // console.log(time)
        let date = new Date(time * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();

        let formattedTime = hours + ':' + minutes;
        // console.log(formattedTime)
        return formattedTime;
    }

    render() {
        return ( 
            <WeatherDisplay 
                weather={this.state.weather}
                getDate={this.dateBuilder(new Date())}
                sunrise={this.convertTime}
                sunset={this.convertTime}
            />
        );
    }
}
 
export default Weather;