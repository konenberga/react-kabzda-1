import React from 'react'
import classes from './dialogs.module.css'
import Dialog from "./dialogItem/dialogItem";
import Message from "./message/message";

const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogsData.map(el => <Dialog name={el.name} id={el.id} key={el.id}/>);
    let messages = props.dialogsPage.messageData.map( el => <Message message={el.message} key={el.id}/>);

    let onClickSendMessage = () => props.sendMessage()

    let onUpdateDialogText = (event) => {
        let updateText = event.target.value
        props.updateDialogText(updateText)
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
                        <textarea onChange={onUpdateDialogText} placeholder={'type text here'} value={props.dialogsPage.newMessageText}></textarea>
                        <button  onClick={onClickSendMessage}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs