const updateDialogText = 'updateDialogText'
const sendMessage = 'sendMessage'


export const sendMessageActionCreator = () => ({value: sendMessage})
export const updateDialogTextActionCreator = updateText => ({value: updateDialogText, updateText})


let dialogsReducer = (state, action) => {
    switch (action.value) {
        case updateDialogText:
            state.newMessageText = action.updateText
            break;
        case sendMessage:
            let newMessageData = {
                id: 4,
                message: state.newMessageText
            }
            state.messageData.push(newMessageData)
            state.newMessageText = ''
            break;
    }
    return state
}


export default dialogsReducer
