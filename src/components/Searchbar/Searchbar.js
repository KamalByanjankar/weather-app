import React from 'react';
import classes from './Searchbar.module.css';

const searchbar = () => {
    return(
        <div className={classes.Searchbar}>
            <input 
                type="text" 
                placeholder="Enter city" 
            />
        </div>
    )
}

export default searchbar;