import React from 'react'
import classes from './../dialogs.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";


const Dialog = (props) => {
    let contactPath = '/dialogs/';
    return (
        <div className={classes.contact}>
            <NavLink to={`${contactPath}${props.id}`}>
                <img src="https://skype-messengers.ru/wp-content/uploads/2019/03/user-1.png" alt=""/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default Dialog