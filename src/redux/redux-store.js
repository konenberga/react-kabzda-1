import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import asideReducer from "./asideReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    aside: asideReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)



export default store