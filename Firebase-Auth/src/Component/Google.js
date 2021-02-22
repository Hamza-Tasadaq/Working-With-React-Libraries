import React, { useState, useEffect } from 'react'
import { auth, googleProvider } from '../Firebase/firebase'

const Google = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const [photoUrl, setPhotoUrl] = useState(null)
    const [userName, setUserName] = useState(null)
    const [userEmail, setUserEmail] = useState(null)

    const handleSignIn = () => {
        auth.signInWithPopup(googleProvider).
            then((res) => {
                setPhotoUrl(res.user.photoURL)
                setUserName(res.user.displayName)
                setUserEmail(res.user.email)
                setIsLogIn(true)
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                setPhotoUrl(null)
                setUserName(null)
                setUserEmail(null)
                setIsLogIn(false)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <div>
            {
                isLogIn ?
                    <>
                        <img src={photoUrl} />
                        <h3>Hello {userName}</h3>
                        <h4>Email : {userEmail}</h4>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                    :
                    <>
                        <button onClick={handleSignIn}>Sign In With Google</button>
                    </>
            }
        </div>
    )
}

export default Google
