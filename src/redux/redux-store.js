import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import asideReducer from "./asideReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    aside: asideReducer

})

let store = createStore(reducers)



export default store