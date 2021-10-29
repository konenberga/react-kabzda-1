import React from 'react';
import classes from './header.module.css'
import {NavLink} from "react-router-dom";




const Header = (props) => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.header}>
                <img className="logo-img" src="https://themified.com/friend-finder/images/logo.png" alt="logo"/>
                <div className={classes.auth}>
                    {
                        (props.login)
                            ? <div>{`${props.login} `}<NavLink to={'/auth//login'}>sing out</NavLink></div>
                            : <div><NavLink to={'/auth//login'}>sing in</NavLink></div>
                    }
                </div>

            </div>
        </div>
    )

}

export default Header;