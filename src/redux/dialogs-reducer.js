const ADD_MESSAGE = 'ADD_MESSAGE'
const SEND_NEW_MESSAGE_TEXT = 'SEND_NEW_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {
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