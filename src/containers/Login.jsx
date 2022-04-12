import React from 'react'
import '../styles/Login.scss'
import Logo from '../../assets/pictures/logos/logo_yard_sale.svg'
import { Header } from '../components/Header'

export const Login = () => {
    return (
        <div className="Login">
            <Header />
            <main className="Login-container">
                <div className="form-container_Login">
                    <figure className="logo-container_Login">
                        <img src={Logo} alt="Es el logo de la página" className="logo-Login" title="logo" />
                    </figure>
                    <form action className="form-Login">
                        <label htmlFor="email" className="label-Login">
                            <span>Email address</span>
                        </label>
                        <input type="email" name id="email" className="input-Login input-email_Login" placeholder="toni@example.com" required />
                        <label htmlFor="password" className="label-Login">
                            <span>Password</span>
                        </label>
                        <input type="password" name id="password" className="input-Login input-password_Login" placeholder="*********" required />
                        <input type="submit" Value="Log in" className="primary-button_Login login-button_Login" />
                        <a href>Forgot my password</a>
                    </form>
                    <input type="submit" Value="Sign up" className="secondary-button_Login singUp-button_Login" />
                </div>
            </main>
        </div>
    )
}
