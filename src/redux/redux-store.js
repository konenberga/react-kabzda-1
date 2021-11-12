import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import asideReducer from "./asideReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    aside: asideReducer,
    usersPage: usersReducer,
    authUser: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk))



export default store