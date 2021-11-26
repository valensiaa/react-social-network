import { connect } from 'react-redux';
import Users from './Users';
import React from 'react';
import * as axios from 'axios'
import {followAC, setUsersAC, unFollowAC, setCurrentPageAC, setUsersTotalCountAC} from '../../redux/users-reducer'

class UsersContainer extends React.Component {

  componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount)
      })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        
      })
  }

  render() {
    return <Users
      totalUsersCount = {this.props.totalUsersCount}
      pageSize = {this.props.pageSize}
      onPageChanged = {this.onPageChanged}
      currentPage = {this.props.currentPage}
      users = {this.props.users}
      follow = {this.props.follow}
      unfollow = {this.props.unfollow}
    />
}
}


let mapStateToProps =(state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}
let mapDispatchToProps =(dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setUsersTotalCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


