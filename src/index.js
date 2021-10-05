import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import StoreContext from "./StoreContext";


let renderEntriesTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <StoreContext.Provider value={store}>
                 <App /*store={store} state={state} dispatch={store.dispatch.bind(store)}*//>
                </StoreContext.Provider>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}



renderEntriesTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderEntriesTree(state)
})






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
