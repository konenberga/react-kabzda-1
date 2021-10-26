import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const follow = 'FOLLOW'
const unfollow = 'UNFOLLOW'
const setUsers = 'SET-USERS'
const setCurrentPage = 'SET-CURRENT-PAGE'
const setTotalUsersCount = 'SET-TOTAL-USERS-COUNT'


export const followAC = (userId) => ({type: follow, userId})
export const unfollowAC = (userId) => ({type: unfollow, userId})
export const setUsersAC = (users) => ({type: setUsers, users})
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: setTotalUsersCount, totalUsersCount})

let initializationState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1

}

const usersReducer = (state = initializationState, action) => {
    let stateCopy;
    switch (action.type) {
        case follow:
            return {...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false }
                    }
                    return el
                })
            }

        case unfollow:
            return {...state,
                users: state.users.map(el => {
                    if (el.id == action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
        }

        case setUsers:
          return {...state, users: [...action.users]}

        case setCurrentPage:
            return {...state, currentPage: action.currentPage}
        case setTotalUsersCount:
            return {...state, totalUsersCount: action.totalUsersCount}

        default:
            return state
    }
}




export default usersReducer