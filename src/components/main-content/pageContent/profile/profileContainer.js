import React from 'react';
import classes from './profile.module.css'
import ProfileInfo from "./profileInfo/profileinfo";
import MyPostContainer from "./myPosts/myPostContainer";
import {connect} from "react-redux";
import * as axios from "axios";
import Preloader from "../../../common/preloader/preloader";
import {toggleIsFetching} from "../../../../redux/usersReducer";
import {setProfileInfo} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        !userId ? userId =2 : userId = userId
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
})(withRouter(ProfileComponent))

export default ProfileContainer;