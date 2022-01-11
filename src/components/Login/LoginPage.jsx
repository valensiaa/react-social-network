import React from 'react' 
import { Form, Field } from 'react-final-form'
import {required} from '../../utils/validators'
import { Input } from '../common/FormControls/FormControls'

const LoginForm = () => {

    const onSubmit = (values) => {
        console.log('handleLoginForm', JSON.stringify(values))
    }
    return <Form onSubmit={onSubmit} >
            {({handleSubmit, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field validate={required} component ={Input} name="Login" type="text" placeholder='Login' />
                    </div>
                    <div>
                        <Field validate={required} component ={Input} name="Password" type="password" placeholder='Password' />
                    </div>
                    <div>
                        <Field validate={required} component ={Input} type="checkbox" name='Checkbox'/> Remember me
                    </div>
                    <div>
                        <button type='submit' disabled={submitting || pristine}>Login</button>
                    </div>
                </form>
            )}
            </Form>


        
}

const LoginPage = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
}

export default LoginPage