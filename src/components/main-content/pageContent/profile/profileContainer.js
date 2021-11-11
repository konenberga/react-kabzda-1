import React from 'react';
import classes from './profile.module.css'
import ProfileInfo from "./profileInfo/profileinfo";
import MyPostContainer from "./myPosts/myPostContainer";
import {connect} from "react-redux";
import Preloader from "../../../common/preloader/preloader";
import {toggleIsFetching} from "../../../../redux/usersReducer";
import {
    getUserProfileThC,
    getUserStatusThC,
    setProfileInfo,
    updateUserStatusThC
} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";


class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
            if (!userId) {
            userId = 20481
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
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
            status: state.profilePage.status
        }
    )
}

// let authRedirectComponent = withAuthRedirect(ProfileComponent)
// authRedirectComponent = connect(mapStateToPropsForAuthRedirect)(authRedirectComponent)
// let authRedirectComponent = (props) => {
//     debugger
//     if (this.props.isAuth == false) return <Redirect to={'/login'} />
//     return <ProfileComponent {...props}/>
// }

// const ProfileContainer = connect(mapStateToProps, {
// //     toggleIsFetching,
// //     setProfileInfo,
// //     getUserProfile: getUserProfileThC
// // })(withRouter(withAuthRedirect(ProfileComponent)))
// //
// // export default ProfileContainer;

export default compose(
    connect(mapStateToProps, {
        toggleIsFetching,
        setProfileInfo,
        getUserProfile: getUserProfileThC,
        getUserStatus: getUserStatusThC,
        updateUserStatus: updateUserStatusThC
    }),
    withRouter,
    // withAuthRedirect
)(ProfileComponent)