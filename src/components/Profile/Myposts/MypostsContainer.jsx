import Myposts from './Myposts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    textChange: state.profilePage.textChange
  }
}
let mapDispatchToProps = (dispatch) => {
   return {
    updateNewPostText:(text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost:() => { 
      dispatch(addPostActionCreator())
    }
   }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)

export default MypostsContainer;