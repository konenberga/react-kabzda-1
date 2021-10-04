export const addPostActionCreator = () => ({type: 'addPost'})
export const changeTextActonCreator = text => ({type: 'updatePostText', text})

const updatePostText = 'updatePostText'
const addPost = 'addPost'

let profileReducer = (state, action) => {
    switch (action.type) {
        case updatePostText:
            state.newPostText = action.text
            break;
        case addPost:
            let newPost = {
                id: 1,
                post: state.newPostText,
                likeCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            break;
    }
    return state
}

export default profileReducer