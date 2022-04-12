import React from 'react'
import '../styles/EmailSend.scss'
import logo from '../../assets/pictures/logos/logo_yard_sale.svg'
import logoEmail from '../../assets/pictures/icons/email.svg'
import { Header } from '../components/Header'

export const EmailSend = () => {
    return (
        <div className='EmailSend'>
            <Header className='Header'/>

            <main className="EmailSend-container">
                <div className="form-container_EmailSend">
                    <figure className="logo-container_EmailSend">
                        <img src={logo} alt="Es el logo de la página" className="logo-EmailSend" title="logo" />
                    </figure>

                    <h1 className="title-EmailSend">Email has been sent!</h1>
                    <p className="subtitle-EmailSend">Please cheack your inbox for instructions on how to reset the password</p>

                    <section className="email-image_EmailSend">
                        <figure>
                            <img src={logoEmail} alt="Es el logo del email" />
                        </figure>
                    </section>

                    <input type="submit" defaultValue="Login" className="primary-button_EmailSend login-button_EmailSend" />

                    <p className="resend-EmailSend">
                        <span>Didn't recieve the email?</span>
                        <a href>Resend</a>
                    </p>
                </div>
            </main>
        </div>
    )
}
