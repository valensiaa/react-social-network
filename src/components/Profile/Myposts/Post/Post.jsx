import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
    return (
      <div className={c.item}>
        <img alt='valya' src='./avatar.jpg'/>
        {props.message}
        <div>
          <span>{props.likesCount}</span>
        </div>
      </div>
    )
}

export default Post;