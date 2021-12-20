import { connect } from 'react-redux';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { follow, unFollow, setToggleIsFetching, getUsers, setCurrent} from '../../redux/users-reducer'


class UsersContainer extends React.Component {

  componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrent(pageNumber, this.props.pageSize)
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
        unFollow = {this.props.unFollow}
        toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress}
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
    isFetching: state.usersPage.isFetching,
    toggleIsFollowingProgress:state.usersPage.toggleIsFollowingProgress
  }
}

export default connect(mapStateToProps, {follow, unFollow, setToggleIsFetching, getUsers, setCurrent})(UsersContainer)