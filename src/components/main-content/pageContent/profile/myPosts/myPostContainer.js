import React from 'react';
import MyPosts from "./myPosts";
import {addPostActionCreator, changeTextActonCreator} from "../../../../../redux/profileReducer";
import StoreContext from "../../../../../StoreContext";

const MyPostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let postData = store.getState().profilePage.postData
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let changeText = (text) => {
                        store.dispatch(changeTextActonCreator(text))
                    }
                    return (
                        <MyPosts addPost={addPost} changeText={changeText} postData={postData}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostContainer