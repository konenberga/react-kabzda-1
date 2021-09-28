import React from 'react';
import classes from './profile.module.css'
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profileInfo/profileinfo";



const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <MyPosts postData={props.profilePage.postData} newPostText={props.profilePage.newPostText} addPost={props.addPost} updatePostText={props.updatePostText}/>
        </div>
    )
}

export default Profile;