import React from 'react'
import {connect} from "react-redux";
import {
    follow, followThC, getUsersThC,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow, unfollowThC
} from "../../../../redux/usersReducer";
import Users from "./users";
import Preloader from "../../../common/preloader/preloader";
import {usersAPI} from "../../../../api/api";


class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Users totalUsersCount={this.props.totalUsersCount}
                                 pageSize={this.props.pageSize}
                                 onPageChanged={this.onPageChanged}
                                 currentPage={this.props.currentPage}
                                 users={this.props.users}
                                 follow={this.props.follow}
                                 unfollow={this.props.unfollow}
                                 followingInProgress={this.props.followingInProgress}
                                 toggleFollowingInProgress={this.props.toggleFollowingInProgress}/>
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


const UsersContainer = connect(mapStateToProps, {
    //action creators
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsers: getUsersThC,
    unfollow: unfollowThC,
    follow: followThC
})(UsersComponent)

export default UsersContainer