import {useState} from 'react';
//import c from './ProfileInfo.module.css'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
    }
    return (
      <div>
        {!editMode ? (
          <div>
            <span onDoubleClick={activateEditMode}>{props.status || 'Whats new today?'}</span>
          </div>
        ) : (
          <div>
            <input 
              onChange={onStatusChange}
              autoFocus={true} 
              onBlur={deActivateEditMode} 
              value= {status}
            />
          </div>
        )}
      </div>
    );
}

export default ProfileStatus;