import React, { useState } from 'react'
import { auth, facebookProvider } from '../Firebase/firebase'


const Facebook = () => {

    const [isLogIn, setIsLogIn] = useState(false)
    const [photoUrl, setPhotoUrl] = useState(null)
    const [userName, setUserName] = useState(null)
    const [userEmail, setUserEmail] = useState(null)

    const handleLogIn = () => {
        auth.signInWithPopup(facebookProvider)
            .then((res) => {
                setPhotoUrl(res.user.photoURL)
                setUserName(res.user.displayName)
                setUserEmail(res.user.email)
                setIsLogIn(true)
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    const handleLogOut = () => {
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
                        <button onClick={handleLogOut}>Sign Out</button>
                    </>
                    :
                    <>
                        <button onClick={handleLogIn}>Login With FaceBook</button>
                    </>
            }

        </div>
    )
}

export default Facebook
