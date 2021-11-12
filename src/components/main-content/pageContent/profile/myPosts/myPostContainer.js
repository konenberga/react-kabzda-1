import React from 'react';
import MyPosts from "./myPosts";
import {addPost} from "../../../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({postData: state.profilePage.postData})


const MyPostContainer = connect(mapStateToProps, {
    addPost
}) (MyPosts)



export default MyPostContainer