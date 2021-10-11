import React, {useContext, useState} from 'react'
import "./Signinbtn.css"
import {SignInWithGoogle} from '../auth/auth'
import {UserContext} from '../Context/userContext'

const Signinbtn = () => {

    const [user, setUser] = useContext(UserContext).user;


    const handleClick = async () => {
        
        let userBysignIn = await SignInWithGoogle();
        if (userBysignIn) setUser(userBysignIn)
        
    }

    return (
        <div id='btn' onClick={handleClick} >
            Sign in with Google
        </div>
    )
}

export default Signinbtn
