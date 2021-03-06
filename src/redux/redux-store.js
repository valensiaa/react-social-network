import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import appReducer from './app-reducer'
import authReducer from './auth-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

 let store = createStore(reducers, applyMiddleware(thunk))

 export default store