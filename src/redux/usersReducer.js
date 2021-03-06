
// actions
import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

//actions creators
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

//thunk

export const getUsersThC = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                    dispatch(toggleIsFetching(false))
                    dispatch(setUsers(data.items))
                    dispatch(setTotalUsersCount(data.totalCount))
                }
            )
    }
}
export const unfollowThC = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        followAPI.unfollow(userId)
            .then(data => {
                    if (data.resultCode == 0) {
                        dispatch(unfollow(userId))
                        dispatch(toggleFollowingInProgress(false, userId))
                    }
                }
            )
    }
}
export const followThC = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        followAPI.follow(userId)
            .then(data => {
                    if (data.resultCode == 0) {
                        dispatch(follow(userId))
                        dispatch(toggleFollowingInProgress(false, userId))
                    }
                }
            )
    }
}

//init state
let initializationState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}


//reducer
const usersReducer = (state = initializationState, action) => {
    let stateCopy;
    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true }
                    }
                    return el
                })
            }

        case UNFOLLOW:
            return {...state,
                users: state.users.map(el => {
                    if (el.id == action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
        }

        case SET_USERS:
          return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}




export default usersReducer