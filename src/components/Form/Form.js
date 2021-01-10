import React from 'react';
import classes from './Form.module.css';

const form = (props) => {
    return(
        <div className={classes.Searchbar}>
            <h1 className={classes.header}>Weather App</h1>
            <form onSubmit={props.submitForm}>
                <input 
                    type="text" 
                    placeholder="Enter city"
                    name="cityName"
                />
            </form>
        </div>
    )
}

export default form;