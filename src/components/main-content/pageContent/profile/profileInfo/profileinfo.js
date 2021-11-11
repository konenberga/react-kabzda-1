import React from "react";
import classes from "./profileInfo.module.css";
import Preloader from "../../../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    return (
        <>
            {
                (!props.profileInfo)
                ? <Preloader/>
                : <div>
                        <div className={classes.profileBg}></div>
                        <div className={classes.profileDescription}>
                            <div><img className={classes.ava} src={props.profileInfo.photos.large} alt="avatar"/></div>
                            <div>
                                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                                <p><b>Полное имя: </b>{props.profileInfo.fullName}</p>
                                <p><b>Коротко о себе: </b>{props.profileInfo.aboutMe}</p>
                                <p><b>Ищу работу: </b>{props.profileInfo.lookingForAJob? 'да ': 'нет '}{props.profileInfo.lookingForAJobDescription}</p>
                                <p><b>Контакты: </b>{props.profileInfo.contacts.facebook}</p>


                            </div>
                        </div>
                    </div>
            }

        </>

    )
}

export default ProfileInfo;