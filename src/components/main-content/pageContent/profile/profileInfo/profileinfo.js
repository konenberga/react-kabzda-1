import React from "react";
import classes from "./profileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profileBg}></div>
            <div className={classes.profileDescription}>
                <div><img className={classes.ava} src="https://skype-messengers.ru/wp-content/uploads/2019/03/user-1.png" alt="avatar"/></div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
            </div>
        </div>
    )
}

export default ProfileInfo;