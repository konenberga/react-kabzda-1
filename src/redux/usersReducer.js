import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const follow = 'FOLLOW'
const unfollow = 'UNFOLLOW'
const setUsers = 'SET-USERS'

export const followAC = (userId) => ({type: follow, userId})
export const unfollowAC = (userId) => ({type: unfollow, userId})
export const setUsersAC = (users) => ({type: setUsers, users})

let initializationState = {
    users: []
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

        default:
            return state
    }
}




export default usersReducer