import React, { Component } from 'react';
import axios from 'axios';


const url = "http://api.openweathermap.org/data/2.5/weather?q=Frankfurt&appid=2c190e833a80ec82eb4bf050a1da5404&units=metric"

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
                // console.log(response)
                this.setState({
                    weather: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() { 
        const weather = this.state.weather;
        return ( 
            <div>
                {(typeof weather.main != 'undefined') ? 
                    <div>
                        <div>
                            <p>{weather.name}, {weather.sys.country}</p>
                            <p>{this.dateBuilder(new Date())}</p>
                        </div>
                        <div>
                            <p>{weather.weather[0].main}</p>
                            <p>{Math.round(weather.main.temp)}&deg;</p>
                        </div>  
                        <div>
                            <p>High: {Math.round(weather.main.temp_max)}&deg;</p>
                            <p>Low: {Math.round(weather.main.temp_min)}&deg;</p>
                        </div>
                    </div>  : ('')}             
            </div>
        );
    }
}
 
export default Weather;