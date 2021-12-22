import { connect } from 'react-redux'
import { sendNewMessageCreator, addMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'

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

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs)


