import React from 'react';
import './Login.css';

// context api
import { auth, provider, signInWithPopup } from '../../firebase'
import { useStateValue } from '../../state/Provider'
import { actionTypes } from '../../state/reducer'

// images and icons
import fbLogo from '../../img/fbLogo.webp'
import fbTextLogo from '../../img/fbTextLogo.svg'
import { Button } from '@material-ui/core';
import "firebase/app"

const Login = () => {

    return (
        <div className="login">
            <div className="loginLogo">
                <img src={fbLogo} alt=""/>
                <img src={fbTextLogo} alt="facebook"/>
            </div>

            <Button type="submit" onClick={() => signInWithPopup(auth, provider)}>Sign In</Button>
        </div>
    )
}

export default Login;
