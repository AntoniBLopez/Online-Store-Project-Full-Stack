import React from 'react'
import '../styles/HomeMenuDeskstop.scss'

export const HomeMenuDeskstop = () => {
    return (
        <div className="menu-container">
            <ul>
                <li>
                    <a href="/" className="my-orders">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    )
}
