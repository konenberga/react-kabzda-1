import React from 'react';
import MyPosts from "./myPosts";
import {addPostActionCreator, changeTextActonCreator} from "../../../../../redux/profileReducer";

const MyPostContainer = (props) => {


    let postData = props.store.getState().profilePage.postData

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let changeText = (text) => {
        props.store.dispatch(changeTextActonCreator(text))
    }

    return (
        <MyPosts addPost={addPost} changeText={changeText} postData={postData}/>
        )
}

export default MyPostContainer