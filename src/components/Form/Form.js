import React from 'react';
import classes from './Form.module.css';

const form = (props) => {
    return(
        <form className={classes.Searchbar} onSubmit={props.submitForm}>
            <input 
                type="text" 
                placeholder="Enter city"
                name="cityName"
            />
        </form>
    )
}

export default form;