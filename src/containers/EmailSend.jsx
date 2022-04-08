import React from 'react'
import '../styles/EmailSend.scss'
import logo from '../../assets/pictures/logos/logo_yard_sale.svg'
import logoEmail from '../../assets/pictures/icons/email.svg'

export const EmailSend = () => {
    return (
        <main className="main-login">
            <div className="form-container">
                <figure className="logo-container">
                    <img src={logo} alt="Es el logo de la página" className="logo" title="logo" />
                </figure>

                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please cheack your inbox for instructions on how to reset the password</p>

                <section className="email-image">
                    <figure>
                        <img src={logoEmail} alt="Es el logo del email" />
                    </figure>
                </section>

                <input type="submit" defaultValue="Login" className="primary-button login-button" />

                <p className="resend">
                    <span>Didn't recieve the email?</span>
                    <a href>Resend</a>
                </p>
            </div>
        </main>
    )
}
