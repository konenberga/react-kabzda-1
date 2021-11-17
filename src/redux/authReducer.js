// actions
import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


//actions creators
export const setAuthUserData = (email, id, login , isAuth) => ({type: SET_AUTH_USER_DATA, email, id, login, isAuth})

//thunk
export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if(data.resultCode === 0) {
                    let {email, id, login} = data.data
                    dispatch(setAuthUserData(email, id, login, true))
                }

            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(authMe())
                }
            })
    }
}


export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
}
}


//init state
let initializationState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}


//reducer
const authReducer = (state = initializationState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                email: action.email,
                id: action.id,
                login: action.login,
                isAuth: action.isAuth
            }

        default :
            return state
    }
}



export default authReducer