import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios'
import photoUser from '../../assets/user-male.png'

const Users = (props) => {

    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }


 
    return (
      <div className={styles.usersPage}>
            {
              props.users.map(u => 
              <div className={styles.userBlock} key={u.id}>
                <div className={styles.photoBar}>
                  <div>
                    <img alt='avatar' src={u.photos.small !== null ? u.photos.small : photoUser} />
                  </div>
                  <div>
                    { u.followed 
                    ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick={()=>{props.follow(u.id)}}>Follow</button> 
                    }
                    
                  </div>
              </div>
                <div className={styles.userInfo}>
                  <div className={styles.statusBar}>
                    <span>{u.name}</span>
                    <p>{u.status}</p>
                  </div>
                  <div className={styles.location}>
                    <span>{'u.location.country'}</span>
                    <span>{'u.location.city'}</span>
                  </div>
                </div>
              </div>
                )
            }
      </div>
    )
}

export default Users;