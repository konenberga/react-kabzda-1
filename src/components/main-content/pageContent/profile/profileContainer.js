import React from 'react';
import classes from './profile.module.css'
import ProfileInfo from "./profileInfo/profileinfo";
import MyPostContainer from "./myPosts/myPostContainer";
import {connect} from "react-redux";
import Preloader from "../../../common/preloader/preloader";
import {toggleIsFetching} from "../../../../redux/usersReducer";
import {getUserProfileThC, setProfileInfo} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileComponent extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
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
        getUserProfile: getUserProfileThC
    }),
    withRouter,
    withAuthRedirect
)(ProfileComponent)