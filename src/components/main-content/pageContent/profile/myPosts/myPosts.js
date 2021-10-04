import React from 'react';
import Post from "./post/post";
import classes from "./myPosts.module.css"

const MyPosts = (props) => {
    let posts = props.postData.map((el) => <Post textPost={el.post} likeCount={el.likeCount}/>)

    let onAddPost = () => {
        props.addPost()
    }
    let onChangeText = (event) => {
        let text = event.currentTarget.value
        props.changeText(text)
    }

    return (
        <div className={classes.myPostWrapper}>
            <div className={classes.newPost}>
                <div><textarea onChange={onChangeText} placeholder={'type ane text here'} value={props.newPostText}/></div>
                <button onClick={onAddPost} id={'addPostBtn'}>add new post</button>
            </div>
            {posts}
        </div>
    )
}



export default MyPosts