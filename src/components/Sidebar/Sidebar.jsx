import React from 'react';
import c from './Sidebar.module.css'

const SideBar = (props) => {
  let friendsElements = props.friendsElements
  .map(i => <div className={c.item} key={i.id}><div></div><span>{i.name}</span></div>)

    return (
      <div className={c.sidebar}>
        <div className={c.sidebar}>
          <div className={c.header}>
            <h2>Friends</h2>
          </div>
          <div className={c.users}>
            {friendsElements}
          </div>
        </div>
      </div>
    )
}

export default SideBar;