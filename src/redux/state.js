


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: 'hi its my first post  ', likeCount: 12},
                {id: 2, post: 'yoyoyoy second post  ', likeCount: 18},
                {id: 3, post: 'any text or post  ', likeCount: 5},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        aside: {
            myFrends: [
                {id: 1, name: 'Lexa'},
                {id: 2, name: 'Denis'},
                {id: 3, name: 'Dimych'},
                {id: 4, name: 'Andriy'},
                {id: 5, name: 'Natali'},

            ]
        }
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    updateDialogText(updateText) {
        this._state.dialogsPage.newMessageText = updateText
        this._callSubscriber(this._state)
    },
    sendNewMessage() {
        let newMessageData = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messageData.push(newMessageData)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },


    dispatch(action) {
        if (action.type === 'updatePostText') {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        } else if (action.type === 'addPost') {
            let newPost = {
                id: 1,
                post: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
    }

}

export const addPostActionCreator = () => ({type: 'addPost'})
export const changeTextActonCreator = text => ({type: 'updatePostText', text})


export default store


