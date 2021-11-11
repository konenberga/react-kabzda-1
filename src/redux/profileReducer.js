import {toggleIsFetching} from "./usersReducer";
import {profileAPI} from "../api/api";

const updatePostText = 'updatePostText'
const addPost = 'addPost'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
const SET_USER_STATUS = 'SET_USER_STATUS'

//action creators
export const addPostActionCreator = () => ({type: 'addPost'})
export const changeTextActonCreator = text => ({type: 'updatePostText', text})
export const setProfileInfo = profile => ({type: SET_PROFILE_INFO, profile})
export const setUserStatus = status => ({type: SET_USER_STATUS, status})

//thunk
export const getUserProfileThC = (userId) => {
    return (dispatch) => {
        !userId ? userId = 2 : userId = userId
        dispatch(toggleIsFetching(true))
        profileAPI.getUserProfile(userId)
            .then(response => {
                    dispatch(toggleIsFetching(false))
                    dispatch(setProfileInfo(response.data))
                }
            )
    }
}


export const getUserStatusThC = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}

export const updateUserStatusThC = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}

//init state
let initializationState = {
    postData: [
        {id: 1, post: 'hi its my first post  ', likeCount: 12},
        {id: 2, post: 'yoyoyoy second post  ', likeCount: 18},
        {id: 3, post: 'any text or post  ', likeCount: 5},
    ],
    newPostText: '',
    profileInfo: null,
    status: ""

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
        case SET_USER_STATUS:
            copyState = {
                ...state, status: action.status
            }
            return copyState
    }
    return state
}

export default profileReducer