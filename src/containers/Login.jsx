import React from 'react'
import '../styles/Login.scss'
import logo from'../../assets/pictures/logos/logo_yard_sale.svg'

export const Login = () => {
    return (
        <main className="main-login">
            <div className="form-container">

                <figure className="logo-container">
                    <img src={logo} alt="Es el logo de la página" className="logo" title="logo" />
                </figure>

                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for your acount</p>

                <form action className="form">
                    <label htmlFor="password" className="label">
                        <span>Password</span>
                    </label>
                    <input type="password" name id="password" className="input input-password" placeholder="*********" required />

                    <label htmlFor="new-password" className="label">
                        <span>Re-enter password</span>
                    </label>
                    <input type="password" name id="new-password" className="input input-password" placeholder="*********" required />

                    <input type="submit" defaultValue="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </main>
    )
}
