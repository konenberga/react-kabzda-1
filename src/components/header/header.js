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
                        (props.isAuth)
                            ? <div>{`${props.login} `}<button onClick={props.logout} to={'/login'}>sing out</button></div>
                            : <div><NavLink to={'/login'}>sing in</NavLink></div>
                    }
                </div>

            </div>
        </div>
    )

}

export default Header;