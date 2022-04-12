import React from 'react'
import '../styles/HomeMenuDeskstop.scss'

export const HomeMenuDeskstop = () => {
    return (
        <div className="menu-container_HomeMenuDeskstop">
            <ul>
                <li>
                    <a href="/">My orders</a>
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
