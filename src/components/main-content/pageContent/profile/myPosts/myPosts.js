import React from 'react';
import Post from "./post/post";
import classes from "./myPosts.module.css"


const MyPosts = (props) => {
    let posts = props.postData.map((el) => {
        return (
            <Post textPost={el.post} likeCount={el.likeCount}/>
        )
    })
    let textAreaElement = React.createRef()
    let addPost = () => {
            let text = textAreaElement.current.value
            alert(text)
    }

    return (
        <div className={classes.myPostWrapper}>
            <div className={classes.newPost}>
                <div><textarea ref={textAreaElement} placeholder={'type ane text here'}></textarea></div>
                <button onClick={addPost} id={'addPostBtn'}>add new post</button>
            </div>
            {posts}
        </div>
    )
}



export default MyPosts