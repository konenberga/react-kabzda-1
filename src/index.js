import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, sendNewMessage, updateDialogText, updatePostText, subscribe, runLogger} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let renderEntriesTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}  addPost={addPost} updatePostText={updatePostText} sendNewMessage={sendNewMessage} updateDialogText={updateDialogText}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}



renderEntriesTree(state)
subscribe(renderEntriesTree)






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
