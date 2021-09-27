import React from 'react'
import classes from './../dialogs.module.css'


const Message = (props) => {
    return (
        <div className={classes.messageWrapper}>
            <div className={classes.message}><p>{props.message}</p></div>
            <div className={`${classes.message} ${classes.myMessage}`}><p>{props.message}</p></div>
        </div>

    )
}


export default Message