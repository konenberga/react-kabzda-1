import React from 'react';
import Post from "./post/post";
import classes from "./myPosts.module.css"
import {addPostActionCreator, changeTextActonCreator} from "../../../../../redux/state";


const MyPosts = (props) => {
    let posts = props.postData.map((el) => <Post textPost={el.post} likeCount={el.likeCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let changeText = (event) => {
        let text = event.currentTarget.value
        props.dispatch(changeTextActonCreator(text))
    }

    return (
        <div className={classes.myPostWrapper}>
            <div className={classes.newPost}>
                <div><textarea onChange={changeText} placeholder={'type ane text here'} value={props.newPostText}/></div>
                <button onClick={addPost} id={'addPostBtn'}>add new post</button>
            </div>
            {posts}
        </div>
    )
}



export default MyPosts