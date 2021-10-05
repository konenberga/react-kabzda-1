import React from 'react'
import {sendMessageActionCreator, updateDialogTextActionCreator} from "../../../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let dialogsPage = store.getState().dialogsPage;
//                     let sendMessage = () => store.dispatch(sendMessageActionCreator())
//                     let updateDialogText = updateText => store.dispatch(updateDialogTextActionCreator(updateText))
//                     return (
//                         <Dialogs updateDialogText={updateDialogText} sendMessage={sendMessage}
//                                  dialogsPage={dialogsPage}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

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