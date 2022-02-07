import React from 'react' 
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import {required} from '../../utils/validators'
import { Input } from '../common/FormControls/FormControls'
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from '../common/FormControls/FormControls.module.css'
//import { FORM_ERROR } from 'final-form'

const LoginForm = ({onSubmit, error}) => {


    return <Form onSubmit={onSubmit} >
            {({ submitError, handleSubmit, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field validate={required} component ={Input} name="email" type="email" placeholder='Email' />
                    </div>
                    <div>
                        <Field validate={required} component ={Input} name="password" type="password" placeholder='Password' />
                    </div>
                    <div>
                        <Field validate={required} component ={Input} type="checkbox" name='rememberMe'/> Remember me
                    </div>
                    {/* {submitError && <div className={style.submitError}>{submitError}</div>} */}
                    {error && <div className={style.submitError}>{error}</div>}
                    <div>
                        <button type='submit' disabled={submitting || pristine}>Login</button>
                    </div>
                </form>
            )}
            </Form>


        
}

const LoginPage = (props) => {
    const onSubmit = (values) => {
        props.login(values.email, values.password, values.rememberMe)
    }

   // if(props.error) FORM_ERROR= props.error
    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} error={props.error} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error
  })

export default connect(mapStateToProps, {login})(LoginPage)