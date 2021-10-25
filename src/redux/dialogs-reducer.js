const ADD_MESSAGE = 'ADD_MESSAGE'
const SEND_NEW_MESSAGE_TEXT = 'SEND_NEW_MESSAGE_TEXT'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id:6, message: body})
            return state
        case SEND_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state
        default:
            return state
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const sendNewMessageCreator = (text) => 
       ({type: SEND_NEW_MESSAGE_TEXT, body: text})

export default dialogsReducer