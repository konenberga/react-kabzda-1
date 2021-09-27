import React from 'react'
import classes from "./frendItem.module.css";
import {NavLink} from "react-router-dom";

const FrendItem = (props) => {
    return (
            <div className={classes.item}>
                <NavLink to={`/frends/${props.id}`}>
                <img src="https://skype-messengers.ru/wp-content/uploads/2019/03/user-1.png" alt=""/>
                <p>{props.name}</p>
                </NavLink>
              </div>
            )
}



export default FrendItem