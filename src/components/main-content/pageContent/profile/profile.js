import React from 'react';
import classes from './profile.module.css'
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profileInfo/profileinfo";



const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <MyPosts postData={props.profilePage.postData} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile;