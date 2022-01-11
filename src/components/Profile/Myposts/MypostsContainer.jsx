import Myposts from './Myposts'
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    textChange: state.profilePage.textChange
  }
}
let mapDispatchToProps = (dispatch) => {
   return {
    addPost:(text) => { 
      dispatch(addPostActionCreator(text))
    }
   }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)

export default MypostsContainer;