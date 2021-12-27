import React from 'react';
import MypostsContainer from './Myposts/MypostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo 
          profile = {props.profile}
          updateStatus={props.updateStatus}
          status={props.status}
        />
        <MypostsContainer/>
      </div>
    )
}

export default Profile;