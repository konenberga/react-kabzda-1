import React from 'react';
import classes from './profile.module.css'
import ProfileInfo from "./profileInfo/profileinfo";
import MyPostContainer from "./myPosts/myPostContainer";
import {connect} from "react-redux";
import * as axios from "axios";
import Preloader from "../../../common/preloader/preloader";
import {toggleIsFetching} from "../../../../redux/usersReducer";
import {setProfileInfo} from "../../../../redux/profileReducer";


class ProfileComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setProfileInfo(response.data)
                }
            )
    }


    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <div className={classes.profile}>
                            <ProfileInfo {...this.props} />
                            <MyPostContainer /*store={props.store}*//>
                        </div>
                }
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return (
        {
            isFetching: state.usersPage.isFetching,
            profileInfo: state.profilePage.profileInfo
        }
    )
}



const ProfileContainer = connect(mapStateToProps, {
    toggleIsFetching,
    setProfileInfo
})(ProfileComponent)

export default ProfileContainer;