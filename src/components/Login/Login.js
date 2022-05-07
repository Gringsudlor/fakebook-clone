import React, { useRef, useState, useEffect } from "react"
import './Login.css';

// context api
import { auth, provider, signInWithPopup } from '../../firebase'
import { useHistory } from "react-router-dom"
import { useStateValue } from '../../state/Provider'
import { actionTypes, initialState } from '../../state/reducer'

import { useAuth } from "../../state/AuthContext"


// images and icons
import fbLogo from '../../img/icons/logo.png'
import { Button } from '@material-ui/core';
import "firebase/app"

const Login = () => {
    const [state, dispatch] = useStateValue();
    const didMountRef = useRef(false)
    const [ loading, setLoading ] = useState(true)
    const { user } = useAuth()
    const history = useHistory()
  
    useEffect(() => {
      if (!didMountRef.current) {
        didMountRef.current = true
  
      }
    }, [user, history])
    
    const signIn = () => {
        //sign in
        signInWithPopup(auth, provider)
         .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            history.push("/home")
        })
        .catch((error) => alert(error.message));
    };
  
    //if (!user || loading) return <div />

    return (
        <div className="login">
            <div className="loginLogo">
                <img src={fbLogo} alt="logoIcon"/>
                <h1 className="fakebook">fakebook</h1>
            </div>

            <Button type="submit" onClick={signIn
            
            }>Sign In</Button>
        </div>
    )
}

export default Login;
