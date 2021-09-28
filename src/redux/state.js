import {renderEntriesTree} from "../render";

let state = {
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
        ]
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
}


export let addPost = () => {
    let newPost = {
        id: 1,
        post: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    renderEntriesTree(state)
}

export let updatePostText = (text) => {
    state.profilePage.newPostText = text
    renderEntriesTree(state)
}



export default state


