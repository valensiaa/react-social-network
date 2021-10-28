
import { connect } from 'react-redux'
import { sendNewMessageCreator, addMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(sendNewMessageCreator(body))
        },
        sendNewMessage: () => {
            dispatch(addMessageCreator())
        } 
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
