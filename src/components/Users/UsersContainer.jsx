import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {followAC} from '../../redux/users-reducer'

let mapStateToProps =(state) => {
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps =(dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    }
  }
}


export default UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

