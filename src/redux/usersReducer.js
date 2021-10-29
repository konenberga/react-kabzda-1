
// actions
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

//actions creators
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

//init state
let initializationState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false

}


//reducer
const usersReducer = (state = initializationState, action) => {
    let stateCopy;
    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false }
                    }
                    return el
                })
            }

        case UNFOLLOW:
            return {...state,
                users: state.users.map(el => {
                    if (el.id == action.userId) {
                        return {...el, followed: true}
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


        default:
            return state
    }
}




export default usersReducer