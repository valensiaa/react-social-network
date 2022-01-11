import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Form, Field } from 'react-final-form'

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name = {d.name} key={d.id} id={d.id}/>)
    let messagesElements =state.messages.map(e => <Message key={e.id} message={e.message}/>)
    
    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>
          {messagesElements}
          <FormMessage
            sendNewMessage={props.sendNewMessage}
          />
        </div>
      </div>
    );
}

const FormMessage =({sendNewMessage}) => {
    let onSubmit = (values) => {
        console.log('handleMessageForm', values)
        sendNewMessage(values.textarea)
    }
    return <Form onSubmit={onSubmit}>
        {
            ({handleSubmit, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                    <Field 
                        placeholder = 'enter your message'
                        name={'textarea'}
                        component={'textarea'}>
                    </Field>
                    <div>
                        <button disabled={submitting || pristine}>Send</button>
                    </div>
                </form>
            )
        }
            
    </Form>

}


export default Dialogs;
