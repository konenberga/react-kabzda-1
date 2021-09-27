import React from 'react'
import classes from './dialogs.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";
import Dialog from "./dialogItem/dialogItem";
import Message from "./message/message";



const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map(el => <Dialog name={el.name} id={el.id}/>);
    let messages = props.dialogsPage.messageData.map( el => <Message message={el.message}/>);

    let textAreaElement = React.createRef()
    let sendMessage = () => {
        let text = textAreaElement.current.value
        alert(text)
    }

    return (
        <div>
            <div className={classes.chatRoom}>
                <div className={classes.contactsWrapper}>
                    {dialogs}
                </div>
                <div>
                    <div className={classes.chatMessage}>
                        {messages}
                    </div>
                    <div className={classes.newsMessageInput}>
                        <textarea ref={textAreaElement} placeholder={'type text here'}></textarea>
                        <button  onClick={sendMessage}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs