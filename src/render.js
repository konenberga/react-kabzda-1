import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, updatePostText, sendNewMessage, updateDialogText} from "./redux/state";

export let renderEntriesTree = (state) => {
        ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}  addPost={addPost} updatePostText={updatePostText} sendNewMessage={sendNewMessage} updateDialogText={updateDialogText}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}