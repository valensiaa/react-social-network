import React from 'react';
import c from './Myposts.module.css';
import Post from './Post/Post';


const Myposts = (props) => {

let postsElements = props.posts
.map(v => <Post message={v.message} likesCount={v.likesCount}/>)

let newPostElement = React.createRef();
let addPost = () => {
  let text = newPostElement.current.value 
 props.addPost(text)
}

return (
        <div className={c.mypostsBlock}>
            <h3> My posts</h3>
            <div>
              <div>
                <textarea ref={newPostElement}></textarea>
              </div>
              <div>
                <button onClick={addPost}>Add post</button>
              </div>

            </div>
            <div className = {c.posts}>
            {postsElements}   
          </div>
        </div>
    )
}

export default Myposts;