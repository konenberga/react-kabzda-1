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
    let copyState
    switch (action.type) {
        case updateDialogText:
            copyState = {
                ...state,
                newMessageText: action.updateText
            }
            return copyState
        case sendMessage:
            let newMessageData = {
                id: state.messageData.length + 1,
                message: state.newMessageText
            }
            copyState = {
                ...state,
                messageData: [...state.messageData, newMessageData],
                newMessageText: ''
            }
            return copyState
    }
    return state
}


export default dialogsReducer
