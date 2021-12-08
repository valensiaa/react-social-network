import React from 'react';
import c from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }
    return (
      <div className={c.profileInfo}>        
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIM2g-rYoy6yFF1agxjQXYMmEdxYG_c0Gjw&usqp=CAU" alt="" />
        </div>
        <div className={c.descriptionBlock}>
          <img alt='avatar' src={props.profile.photos.large}/>
          ava+desc
        </div>
      </div> 
    )
}

export default ProfileInfo;