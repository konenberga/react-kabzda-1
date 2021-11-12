import React from 'react'
import classes from './dialogs.module.css'
import Dialog from "./dialogItem/dialogItem";
import Message from "./message/message";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogsData.map(el => <Dialog name={el.name} id={el.id} key={el.id}/>);
    let messages = props.dialogsPage.messageData.map( el => <Message message={el.message} key={el.id}/>);

    const addNewMessage = (values) => props.sendMessage(values.newMessageText)

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
                        <AddMessageReduxForm onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'newMessageText'} component={'textarea'} placeholder={'type text here'}/>
                <button>SEND</button>
            </form>
        </div>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'addMessageForm'
})(AddMessageForm)

export default Dialogs