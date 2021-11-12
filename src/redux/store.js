// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
//
//
// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 1, post: 'hi its my first post  ', likeCount: 12},
//                 {id: 2, post: 'yoyoyoy second post  ', likeCount: 18},
//                 {id: 3, post: 'any text or post  ', likeCount: 5},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Lexa'},
//                 {id: 2, name: 'Denis'},
//                 {id: 3, name: 'Dimych'},
//                 {id: 4, name: 'Andriy'},
//                 {id: 5, name: 'Natali'},
//
//             ],
//             messageData: [
//                 {id: 1, message: 'hi, how are you'},
//                 {id: 2, message: 'I am want $10000000'},
//                 {id: 3, message: 'Visyakov p....r'},
//             ],
//             newMessageText: ''
//         },
//         aside: {
//             myFrends: [
//                 {id: 1, name: 'Lexa'},
//                 {id: 2, name: 'Denis'},
//                 {id: 3, name: 'Dimych'},
//                 {id: 4, name: 'Andriy'},
//                 {id: 5, name: 'Natali'},
//
//             ]
//         }
//     },
//     _callSubscriber() {},
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber(this._state)
//     }
//
// }
//
//
//
//
//
//
// export default store
//
//
