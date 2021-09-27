import React from 'react';
import Post from "./post/post";
import classes from "./myPosts.module.css"


const MyPosts = (props) => {
    let posts = props.postData.map((el) => {
        return (
            <Post textPost={el.post} likeCount={el.likeCount}/>
        )
    })

    return (
        <div className={classes.myPostWrapper}>
            <div className={classes.newPost}>
                <div><textarea placeholder={'type ane text here'}></textarea></div>
                <button id={'addPostBtn'}>add new post</button>
            </div>
            {posts}
        </div>
    )
}



export default MyPosts