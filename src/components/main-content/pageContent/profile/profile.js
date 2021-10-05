import React from 'react';
import classes from './profile.module.css'
import ProfileInfo from "./profileInfo/profileinfo";
import MyPostContainer from "./myPosts/myPostContainer";



const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <MyPostContainer /*store={props.store}*//>
        </div>
    )
}

export default Profile;