import React from 'react';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo/>
        <Myposts 
          posts = {props.profilePage.posts}
          textChange = {props.profilePage.textChange}
          dispatch = {props.dispatch}
        />
      </div>
    )
}

export default Profile;