import React from 'react';
import MyPosts from "./myPosts";
import {addPostActionCreator, changeTextActonCreator} from "../../../../../redux/profileReducer";
import {connect} from "react-redux";

// const MyPostContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let postData = store.getState().profilePage.postData
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//                     let changeText = (text) => {
//                         store.dispatch(changeTextActonCreator(text))
//                     }
//                     return (
//                         <MyPosts addPost={addPost} changeText={changeText} postData={postData}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }

let mapStateToProps = (state) => ({postData: state.profilePage.postData})

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        changeText: (text) => {dispatch(changeTextActonCreator(text))}
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)





export default MyPostContainer