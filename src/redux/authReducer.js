// actions
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


//actions creators
export const setAuthUserData = (email, id, login) => ({type: SET_AUTH_USER_DATA, email, id, login})

//init state
let initializationState = {
    email: null,
    id: null,
    login: null
}


//reducer
const authReducer = (state = initializationState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                email: action.email,
                id: action.id,
                login: action.login
            }

        default :
            return state
    }
}

export default authReducer