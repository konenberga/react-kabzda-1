import React from "react";
import classes from './preloader.module.css'
import preloader from '../../../assets/images/preloaderRestricted.gif'


const Preloader = (props) => {
    return (
        <div className={classes.preloaderWrapper}>
            <img src={preloader} alt=""/>
        </div>
    )
}


export default Preloader