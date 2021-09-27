let state = {
    profilePage: {
        postData: [
            {id: 1, post: 'hi its my first post  ', likeCount: 12},
            {id: 2, post: 'yoyoyoy second post  ', likeCount: 18},
            {id: 3, post: 'any text or post  ', likeCount: 5},
        ],
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


export let addPost = (postMessage) => {
    let post = {
        id: 1,
        post: postMessage,
        likeCount: 0
    }
    state.profilePage.postData.push(post)
}



export default state


