import React from 'react';
import Post from "./post/post";
import classes from "./myPosts.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredFields} from "../../../../../utils/validators/validators";
import {Textarea} from "../../../../common/formsControls/FormsControls";


const maxLength30 = maxLength(30)

const MyPosts = (props) => {
    let posts = props.postData.map((el) => <Post textPost={el.post} likeCount={el.likeCount} key={el.id}/>)

    // let onAddPost = () => {
    //     props.addPost()
    // }
    // let onChangeText = (event) => {
    //     let text = event.currentTarget.value
    //     props.changeText(text)
    // }

    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.myPostWrapper}>
            <div className={classes.newPost}>
                <MyPostReduxForm onSubmit={addNewPost}/>
            </div>
            {posts}
        </div>
    )
}

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name={'newPostText'} placeholder={'type ane text here'} validate={[requiredFields, maxLength30]}/></div>
            <button  id={'addPostBtn'}>add new post</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: 'myPostForm'})(MyPostForm)



export default MyPosts