import React from 'react'
import '../styles/NewPassword.scss'
import logo from'../../assets/pictures/logos/logo_yard_sale.svg'
import { Header } from '../components/Header'

export const NewPassword = () => {
    return (
        <div className="NewPassword">
            <Header />
            <main className="NewPassword-container">
                <div className="form-container_NewPassword">

                    <figure className="logo-container_NewPassword">
                        <img src={logo} alt="Es el logo de la página" className="logo-NewPassword" title="logo" />
                    </figure>

                    <h1 className="title-NewPassword">Create a new password</h1>
                    <p className="subtitle-NewPassword">Enter a new password for your acount</p>

                    <form action className="form-NewPassword">
                        <label htmlFor="password" className="label-NewPassword">
                            <span>Password</span>
                        </label>
                        <input type="password" name id="password" className="input-NewPassword input-password_NewPassword" placeholder="*********" required />

                        <label htmlFor="new-password" className="label-NewPassword">
                            <span>Re-enter password</span>
                        </label>
                        <input type="password" name id="new-password" className="input-NewPassword input-password_NewPassword" placeholder="*********" required />

                        <input type="submit" value="Confirm" className="primary-button_NewPassword login-button_NewPassword" />
                    </form>
                </div>
            </main>
        </div>
    )
}
