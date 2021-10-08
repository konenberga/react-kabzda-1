import React from 'react';
import classes from './navBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
            <div>
                <nav className={classes.navigation}>
                    <div className={classes.item}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></div>
                    <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>Message</NavLink></div>
                    <div className={classes.item}><NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink></div>
                    <div className={classes.item}><NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink></div>
                    <div className={classes.item}><NavLink to="/setting" activeClassName={classes.activeLink}>Settings</NavLink></div>
                    <div className={classes.item}><NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink></div>
                </nav>
            </div>

    )
}

export default NavBar;