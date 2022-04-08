import React from 'react'
import '../styles/Login.scss'
import Logo from '../../assets/pictures/logos/logo_yard_sale.svg'

export const Login = () => {
    return (
        <main className="main-login">
            <div className="form-container">
                <figure className="logo-container">
                    <img src={Logo} alt="Es el logo de la página" className="logo" title="logo" />
                </figure>
                <form action className="form">
                    <label htmlFor="email" className="label">
                        <span>Email address</span>
                    </label>
                    <input type="email" name id="email" className="input input-email" placeholder="toni@example.com" required />
                    <label htmlFor="password" className="label">
                        <span>Password</span>
                    </label>
                    <input type="password" name id="password" className="input input-password" placeholder="*********" required />
                    <input type="submit" defaultValue="Log in" className="primary-button login-button" />
                    <a href>Forgot my password</a>
                </form>
                <input type="submit" defaultValue="Sign up" className="secondary-button singUp-button" />
            </div>
        </main>
    )
}
