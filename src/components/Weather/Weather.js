import React, { Component } from 'react';

class Weather extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                    <p>Frankfurt am Main, DE</p>
                    <p>Thursday, 30 December 2020</p>
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