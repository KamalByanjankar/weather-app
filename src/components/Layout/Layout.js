import React from 'react';
import './Layout.css';
import Weather from '../Weather/Weather';

const layout = props => {
    return(
        <div className="weather">
            <main>
                <div className="search-box">
                    <input 
                        className="search-bar"
                        type="text" 
                        placeholder="Search city"
                    />
                </div>
                <Weather />
            </main>
        </div>
        
    )
}

export default layout;