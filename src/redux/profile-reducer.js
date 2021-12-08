const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 2, message: 'Its my first props', likesCount: 20},
      ],
      textChange: 'Valya is frontend developer',
      profile: null
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => 
       ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer