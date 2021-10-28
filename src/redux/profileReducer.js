const updatePostText = 'updatePostText'
const addPost = 'addPost'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'

export const addPostActionCreator = () => ({type: 'addPost'})
export const changeTextActonCreator = text => ({type: 'updatePostText', text})
export const setProfileInfo = profile => ({type: SET_PROFILE_INFO, profile})

let initializationState = {
    postData: [
        {id: 1, post: 'hi its my first post  ', likeCount: 12},
        {id: 2, post: 'yoyoyoy second post  ', likeCount: 18},
        {id: 3, post: 'any text or post  ', likeCount: 5},
    ],
    newPostText: '',
    profileInfo: null

}

let profileReducer = (state = initializationState, action) => {
    let copyState
    switch (action.type) {
        case updatePostText: {
            copyState = {
                ...state,
                newPostText: action.text
            }
            return copyState
        }
        case addPost:
            let newPost = {
                id: state.postData.length + 1,
                post: state.newPostText,
                likeCount: 0
            }
            copyState = {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
            return copyState
        case SET_PROFILE_INFO:
            copyState = {
                ...state, profileInfo: action.profile
            }
            return copyState
    }
    return state
}

export default profileReducer