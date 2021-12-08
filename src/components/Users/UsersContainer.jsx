import { connect } from 'react-redux';
import Users from './Users';
import React from 'react';
import * as axios from 'axios'
import Preloader from '../common/Preloader/Preloader';
import { follow, setUsers, unFollow, setToggleIsFetching, setCurrentPage, setUsersTotalCount} from '../../redux/users-reducer'


class UsersContainer extends React.Component {

  componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setToggleIsFetching(false)
        this.props.setUsersTotalCount(response.data.totalCount)
      })
  }
  onPageChanged = (pageNumber) => {
    this.props.setToggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setToggleIsFetching(false)
        
      })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users
        totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        onPageChanged = {this.onPageChanged}
        currentPage = {this.props.currentPage}
        users = {this.props.users}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
      />
    </>
}
}


let mapStateToProps =(state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setUsersTotalCount, setToggleIsFetching})(UsersContainer)


