import React from 'react';
import c from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
      <div className={c.profileInfo}>        
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIM2g-rYoy6yFF1agxjQXYMmEdxYG_c0Gjw&usqp=CAU" alt="" />
        </div>
        <div>
          ava+desc
        </div>
      </div> 
    )
}

export default ProfileInfo;