const updateDialogText = 'updateDialogText'
const sendMessage = 'sendMessage'


export const sendMessageActionCreator = () => ({type: sendMessage})
export const updateDialogTextActionCreator = updateText => ({type: updateDialogText, updateText})

let initializationState = {
    dialogsData: [
        {id: 1, name: 'Lexa'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Dimych'},
        {id: 4, name: 'Andriy'},
        {id: 5, name: 'Natali'},

    ],
    messageData: [
        {id: 1, message: 'hi, how are you'},
        {id: 2, message: 'I am want $10000000'},
        {id: 3, message: 'Visyakov p....r'},
    ],
    newMessageText: ''
}


let dialogsReducer = (state = initializationState, action) => {
    switch (action.type) {
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
