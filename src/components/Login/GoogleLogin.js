import React from 'react'
import './GoogleLogin.css'

const GoogleLogin = ({firebase}) => {

    const signInWithGoogle = () => {
        firebase.signInWithGoogle()
            .then((res) => {
                const { isNewUser, profile: { email, name: fullName, picture}} = res.additionalUserInfo
                console.log({
                    email,
                    fullName,
                    picture,
                    isNew: isNewUser
                })
            })
            .catch((err) => console.error(err.message))
    }
    
    return (
        <div className="container" onClick={signInWithGoogle}>
            <img
                className="logo"
                alt="g_logo"
                src={`${process.env.PUBLIC_URL}/g-logo.png`}
            />
            <span className="text">Sign In with Google</span>
        </div>
    )
}

export default GoogleLogin
