export const addPostActionCreator = () => ({type: 'addPost'})
export const changeTextActonCreator = text => ({type: 'updatePostText', text})

const updatePostText = 'updatePostText'
const addPost = 'addPost'

let initializationState = {
    postData: [
        {id: 1, post: 'hi its my first post  ', likeCount: 12},
        {id: 2, post: 'yoyoyoy second post  ', likeCount: 18},
        {id: 3, post: 'any text or post  ', likeCount: 5},
    ],
    newPostText: ''
}

let profileReducer = (state = initializationState, action) => {
    switch (action.type) {
        case updatePostText: {
            let copyState = {...state}
            copyState.newPostText = action.text
            return copyState
        }
        case addPost:
            {let newPost = {
                id: 1,
                post: state.newPostText,
                likeCount: 0
            }
            let copyState = {...state};
            copyState.postData = [...state.postData]
            copyState.postData.push(newPost)
            copyState.newPostText = '';
            return copyState}
    }
    return state
}

export default profileReducer