import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios'
import photoUser from '../../assets/user-male.png'

class Users extends React.Component {

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
  let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
  let pages = []
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
    

    return (<div className={styles.usersPage} >
      <div className={styles.paginationBlock}>
        {pages.map(p => <span onClick = {() => this.onPageChanged(p)} className = {this.props.currentPage === p && styles.selectedPage}>{p}</span>)}
      </div>
      {
        this.props.users.map(u =>
          <div className={styles.userBlock} key={u.id}>
            <div className={styles.photoBar}>
              <div>
                <img alt='avatar' src={u.photos.small !== null ? u.photos.small : photoUser} />
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                  : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
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

}

export default Users;