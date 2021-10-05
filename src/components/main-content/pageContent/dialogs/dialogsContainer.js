import React from 'react'
import {sendMessageActionCreator, updateDialogTextActionCreator} from "../../../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import StoreContext from "../../../../StoreContext";


const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let dialogsPage = store.getState().dialogsPage;
                    let sendMessage = () => store.dispatch(sendMessageActionCreator())
                    let updateDialogText = updateText => store.dispatch(updateDialogTextActionCreator(updateText))
                    return (
                        <Dialogs updateDialogText={updateDialogText} sendMessage={sendMessage}
                                 dialogsPage={dialogsPage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer