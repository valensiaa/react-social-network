const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 2, message: 'Its my first props', likesCount: 20},
      ],
      textChange: 'Valya is frontend developer'
  }

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.textChange,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                textChange: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                textChange: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
       ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer