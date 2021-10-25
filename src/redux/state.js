import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
  _state: {
    profilePage: {
      posts: [
          {id: 1, message: 'How are you?', likesCount: 15},
          {id: 2, message: 'Its my first props', likesCount: 20},
        ],
        textChange: 'Valya is frontend developer'
    },
    dialogsPage: {
      messages: [
          {id: 1, message: 'Hi'},
          {id: 2, message: 'How are you?'},
          {id: 3, message: 'Im fine'}
        ],
        newMessageText: '',
      dialogs: [
          {id: 1, name: 'Valya'},
          {id: 3, name: 'Basya'},
          {id: 2, name: 'Marta'},
          {id: 4, name: 'Andrii'},
          {id: 5, name: 'Haskel'}
          ]
    },
    sidebar: {
      friendsSidebar: [
        {id: 1, name: 'Basya'},
        {id: 3, name: 'Valya'},
        {id: 2, name: 'Andrii'}
      ]
    }

  },
  _callSubscriber() {
    console.log('State has changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);
  }
}





export default store;