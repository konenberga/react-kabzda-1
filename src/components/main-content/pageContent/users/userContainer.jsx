import React from 'react'
import {connect} from "react-redux";
import Users from "./users";
import {followAC, setUsersAC, unfollowAC} from "../../../../redux/usersReducer";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users)=> {
            dispatch(setUsersAC(users))
        },

    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer