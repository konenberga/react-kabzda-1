import React from 'react'
import classes from './dialogs.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";
import Dialog from "./dialogItem/dialogItem";
import Message from "./message/message";



const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map(el => <Dialog name={el.name} id={el.id}/>);
    let messages = props.dialogsPage.messageData.map( el => <Message message={el.message}/>);

    return (
        <div>
            <div className={classes.chatRoom}>
                <div className={classes.contactsWrapper}>
                    {dialogs}
                </div>
                <div className={classes.chat}>
                    {messages}
                </div>
            </div>
        </div>
    )
}

export default Dialogs