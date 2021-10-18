import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map( d => <DialogItem name = {d.name} id={d.id}/>)

    let messagesElements =props.state.messages
        .map( e => <Message message={e.message}/>)

    let addMessage =React.createRef();
    let buttonClick =() =>{
        let text = addMessage.current.value;
        alert(text)
    }

    return (
        <div className ={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                <textarea ref={addMessage}></textarea>
              </div>
              <div>
                <button onClick={buttonClick}>Add message</button>
              </div>
            </div>
        </div>
    )
}

export default Dialogs;
