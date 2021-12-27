import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import {getUserProfile, getStatus, updateStatus} from './../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId) userId = 2
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
}

  render () {
    return (
        <Profile {...this.props} 
        profile = {this.props.profile} 
        updateStatus={this.props.updateStatus} 
        status={this.props.status} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer)
