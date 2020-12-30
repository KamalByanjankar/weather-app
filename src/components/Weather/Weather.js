import React, { Component } from 'react';

class Weather extends Component {
    state = {  }

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

    render() { 
        return ( 
            <div>
                <div>
                    <p>Frankfurt am Main, DE</p>
                    <p>{this.dateBuilder(new Date())}</p>
                </div>
                <div>
                    <p>Partly Cloudy</p>
                    <p>6 &deg;</p>
                </div>  
                <div>
                    <p>High: 5 &deg;</p>
                    <p>Low: 1 &deg;</p>
                    <p>Sunrise</p>
                    <p>08:24</p>
                    <p>Sunset</p>
                    <p>16:32</p>
                </div>
            </div>
        );
    }
}
 
export default Weather;