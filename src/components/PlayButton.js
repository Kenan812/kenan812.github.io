import React from 'react'
import { getCookie } from './Helpers'
import { Link } from 'react-router-dom'
export default function PlayButton() {
    function redirectToLobby() {
        window.location.href = "https://kenan812.github.io/kenan812-chat.github.io/"
    }
    if (getCookie('token') == null) {
        return (
            <Link to="/login">
                Play
            </Link>
        )
    } else {

        return (
            <Link onClick={redirectToLobby} to="">
                Play
            </Link>
        )
    }

}