import React from 'react'
import {sendMessage, updateDialogText} from "../../../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
           dialogsPage: state.dialogsPage,
            isAuth: state.authUser.isAuth
    }
}

const DialogsContainer = connect (mapStateToProps, {
    sendMessage,
    updateDialogText
})(Dialogs)

export default DialogsContainer