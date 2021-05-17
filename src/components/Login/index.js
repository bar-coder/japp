import React from 'react'
import {FirebaseContext} from '../../Firebase/index'
import GoogleButton from './GoogleLogin'

const Login = () => (
    <FirebaseContext.Consumer>
        {firebase => <GoogleButton firebase={firebase}/>}
    </FirebaseContext.Consumer>
)

export default Login
