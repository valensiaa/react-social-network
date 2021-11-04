import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map( d => <DialogItem name = {d.name} key={d.id} id={d.id}/>)
    let messagesElements =state.messages.map( e => <Message key={e.id} message={e.message}/>)
    let newMessageBody = props.dialogsPage.newMessageText;
    

    let onTextChangeMessage = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendNewMessage()
    }

    return (
        <div className ={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea 
                        placeholder = 'enter your message'
                        onChange = {onTextChangeMessage}
                        value ={newMessageBody}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
