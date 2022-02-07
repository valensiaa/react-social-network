import { authApi } from "../api/api"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_ERROR = 'SET_ERROR'

let initialState = {
    id: null,
    email: null,
    login: null,
    password: null,
    error:'',
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:{
            return {
                ...state,
                ...action.data
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state
}
}


const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login, isAuth}})
export const getAuthUserData = () => (dispatch) => {
    return authApi.me().then((response) => {
        if(response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
 
    })
}
const setError = (error) => ({type: SET_ERROR, error})

export const login = (email, password, rememberMe) => (dispatch) => {

    authApi.login(email, password, rememberMe).then((response) => {
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            console.log(response.data)
            
           response.data.messages.length > 0 && dispatch(setError(response.data.messages[0]) )

        }
    })
}
export const logout = (email, password, rememberMe) => (dispatch) => {
    authApi.logOut(email, password, rememberMe).then((response) => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer