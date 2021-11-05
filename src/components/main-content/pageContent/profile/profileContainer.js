import React from 'react';
import classes from './profile.module.css'
import ProfileInfo from "./profileInfo/profileinfo";
import MyPostContainer from "./myPosts/myPostContainer";
import {connect} from "react-redux";
import * as axios from "axios";
import Preloader from "../../../common/preloader/preloader";
import {toggleIsFetching} from "../../../../redux/usersReducer";
import {getUserProfileThC, setProfileInfo} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";


class ProfileComponent extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }


    render() {
        if (this.props.isAuth == false) return <Redirect to={'/login'} />
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <div className={classes.profile}>
                            <ProfileInfo {...this.props} />
                            <MyPostContainer/>
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
            profileInfo: state.profilePage.profileInfo,
            isAuth: state.authUser.isAuth
        }
    )
}




const ProfileContainer = connect(mapStateToProps, {
    toggleIsFetching,
    setProfileInfo,
    getUserProfile: getUserProfileThC
})(withRouter(ProfileComponent))

export default ProfileContainer;