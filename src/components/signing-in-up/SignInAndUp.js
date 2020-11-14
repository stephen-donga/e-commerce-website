import React from 'react'

import './sign-in-and-up.scss'

import SignIn from '../sign-in/SignIn'
import SignUp from '../sign-up/SignUp'

function SignInAndUp() {
    return (
        <div className='signup-in'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndUp
