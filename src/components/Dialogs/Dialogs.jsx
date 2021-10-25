import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendNewMessageCreator, addMessageCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map( d => <DialogItem name = {d.name} id={d.id}/>)

    let messagesElements =props.state.messages
        .map( e => <Message message={e.message}/>)

    let newMessageBody = props.state.newMessageText;
    

    let textChangeMessage = (e) => {
        let body = e.target.value;
   
        props.dispatch(sendNewMessageCreator(body));
    }
    let onSendMessageClick = () => {
        props.dispatch(addMessageCreator());
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
                        onChange = {textChangeMessage}
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
