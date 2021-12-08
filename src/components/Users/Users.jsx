import React from 'react';
import styles from './Users.module.css'
import photoUser from '../../assets/user-male.png'
import { NavLink } from 'react-router-dom';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
  let pages = []
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
    
    return (<div className={styles.usersPage} >
      <div className={styles.paginationBlock}>
        {pages.map(p => <span onClick = {() => props.onPageChanged(p)} className = {props.currentPage === p ? styles.selectedPage : undefined} >{p}</span>)}
      </div>
      {
        props.users.map(u =>
          <div className={styles.userBlock} key={u.id}>
            <div className={styles.photoBar}>
              <div>
                <NavLink to={'/profile/'+ u.id} >
                  <img alt='avatar' src={u.photos.small !== null ? u.photos.small : photoUser} />
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                  : <button onClick={() => { props.follow(u.id) }}>Follow</button>
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
    </div>)
  }



export default Users;