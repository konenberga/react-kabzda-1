import React from 'react'
import {sendMessageActionCreator, updateDialogTextActionCreator} from "../../../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
           dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(sendMessageActionCreator())},
        updateDialogText: (updateText) => {dispatch(updateDialogTextActionCreator(updateText))}
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer