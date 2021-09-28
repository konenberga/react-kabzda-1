import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, updatePostText, newDialogMessage} from "./redux/state";

export let renderEntriesTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}  addPost={addPost} updatePostText={updatePostText} newDialogMessage={newDialogMessage}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}