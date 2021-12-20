import {usersAPI} from './../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_TOGGLE_IS_FOLLOWING_PROGRESS = 'SET_TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
     users: [ ], 
     pageSize: 5,
     totalUsersCount: 0,
     currentPage: 1,
     isFetching: false,
     toggleIsFollowingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }

        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                    })
                }
        }

        case SET_USERS: {
            return {
                ...state,
                users:action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        
        case SET_TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                toggleIsFollowingProgress: action.isFollowing
                ? [...state.toggleIsFollowingProgress, action.userId]
                : state.toggleIsFollowingProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state
}
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalCount})
export const setToggleIsFetching = (isFetching) => ({type: SET_TOGGLE_IS_FETCHING, isFetching})
export const setToggleFollowingProgress = (isFollowing, userId) => ({type: SET_TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId})

export const getUsers = (currentPage, pageSize ) => {
    return (dispatch) => {
        dispatch(setToggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setToggleIsFetching(false))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}
export const setCurrent = (currentPage, pageSize ) => {
    return (dispatch) => {
        dispatch(setToggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setToggleIsFetching(false))
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setToggleFollowingProgress(true, userId))
        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
        dispatch(setToggleFollowingProgress(false, userId))
        })
    }   
}
export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(setToggleFollowingProgress(true, userId))
        usersAPI.unFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
            }
        dispatch(setToggleFollowingProgress(false, userId))
        })
    }   
}

export default usersReducer