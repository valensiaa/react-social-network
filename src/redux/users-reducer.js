const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {id: 1, followed: true, name: 'Basya', status: 'I was best cat ever', location: {city: 'Kyiv', country: 'Catraine'}},
        // {id: 2, followed: false, name: 'Andriy', status: 'I love cats', location: {city: 'Kyiv', country: 'China'}},
        // {id: 3, followed: true, name: 'Marta', status: 'I am a blackest cat ever', location: {city: 'Kyiv', country: 'Ukraine'}}

      ]
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
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer