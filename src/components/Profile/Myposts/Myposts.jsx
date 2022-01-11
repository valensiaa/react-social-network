import React from 'react';
import c from './Myposts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form'
import { maxLength, required } from '../../../utils/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const Myposts = (props) => {

let postsElements = props.posts
.map(v => <Post message={v.message} key={v.id} likesCount={v.likesCount}/>)

return (
        <div className={c.mypostsBlock}>
            <h3> My posts</h3>
            <AddNewFormPost addPost={props.addPost}/>
            <div className = {c.posts}>
            {postsElements}   
          </div>
        </div>
    )
}

const AddNewFormPost = ({addPost}) => {

  let onSubmit = (values) => { 
    console.log('newPost', values.textareaNewPost)
    addPost(values.textareaNewPost)
  }

  const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

  return <Form onSubmit={onSubmit}>
    {({handleSubmit, submitting, pristine }) => (
       <form onSubmit={handleSubmit}>
        <Field
          validate={composeValidators(required, maxLength(10))}
          component={Textarea}
          name={'textareaNewPost'}>
        </Field>
        <div>
          <button disabled={submitting || pristine}>Add post</button>
        </div>
      </form>
    )}
         
  </Form>
}
export default Myposts;