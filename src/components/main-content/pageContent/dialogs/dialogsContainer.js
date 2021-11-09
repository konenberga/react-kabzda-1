import React from 'react'
import {sendMessage, updateDialogText} from "../../../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
           dialogsPage: state.dialogsPage
    }
}

// let authRedirectComponent = withAuthRedirect(Dialogs)
// let authRedirectComponent = (props) => {
//     debugger
//     if (this.props.isAuth == false) return <Redirect to={'/login'} />
//     return <Dialogs {...props}/>
// }


export default compose(
    connect (mapStateToProps, {
        sendMessage,
        updateDialogText
    }),
    withAuthRedirect
)(Dialogs)

// const DialogsContainer = connect (mapStateToProps, {
//     sendMessage,
//     updateDialogText
// })(withAuthRedirect(Dialogs))

// export default DialogsContainer