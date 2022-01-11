import { connect } from 'react-redux'
import { addMessageCreator } from '../../redux/dialogs-reducer'
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
        sendNewMessage: (newMessageBody) => {
            dispatch(addMessageCreator(newMessageBody))
        } 
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs)


