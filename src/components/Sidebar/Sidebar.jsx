import React from 'react';
import state from '../../redux/state';
import c from './Sidebar.module.css'

const SideBar = (props) => {
  let friendsElements = props.state
  .map(i => <div className={c.item}><div></div><span>{i.name}</span></div>)
    return (
      <div className={c.sidebar}>
        <div className={c.header}>
          <h2>Friends</h2>
        </div>
        <div className={c.users}>
          {friendsElements}
        </div>
      </div>
    )
}

export default SideBar;