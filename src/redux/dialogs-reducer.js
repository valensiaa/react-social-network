const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Im fine'}
      ],
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
        case ADD_MESSAGE:{
            let body = action.message
            return {
                ...state,
                messages: [...state.messages,{id:6, message: body}]
            }
        }
        default:
            return state
    }
}

export const addMessageCreator = (message) => ({type: ADD_MESSAGE, message})

export default dialogsReducer