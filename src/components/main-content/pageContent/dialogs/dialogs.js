import React from 'react'
import classes from './dialogs.module.css'
import Dialog from "./dialogItem/dialogItem";
import Message from "./message/message";
import {sendMessageActionCreator, updateDialogTextActionCreator} from "../../../../redux/dialogsReducer";




const Dialogs = (props) => {
    // debugger
    let dialogs = props.dialogsPage.dialogsData.map(el => <Dialog name={el.name} id={el.id}/>);
    let messages = props.dialogsPage.messageData.map( el => <Message message={el.message}/>);
    debugger
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let updateDialogText = (event) => {
        let updateText = event.target.value
        props.dispatch(updateDialogTextActionCreator(updateText))
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
                        <textarea onChange={updateDialogText} placeholder={'type text here'} value={props.dialogsPage.newMessageText}></textarea>
                        <button  onClick={sendMessage}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs