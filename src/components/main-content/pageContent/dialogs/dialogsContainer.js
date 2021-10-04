import React from 'react'
import {sendMessageActionCreator, updateDialogTextActionCreator} from "../../../../redux/dialogsReducer";
import Dialogs from "./dialogs";




const DialogsContainer = (props) => {
    let dialogsPage= props.store.getState().dialogsPage;

    let sendMessage = () => props.store.dispatch(sendMessageActionCreator())

    let updateDialogText = updateText => props.store.dispatch(updateDialogTextActionCreator(updateText))

    return <Dialogs updateDialogText={updateDialogText} sendMessage={sendMessage} dialogsPage={dialogsPage}/>
}

export default DialogsContainer