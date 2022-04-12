import React from 'react'
import '../styles/MyAccount.scss'
import { Header } from '../components/Header'

export const MyAccount = () => {
    return (
        <div className="MyAccount">
            <Header />
            <main className="MyAccount-container">
                <div className="form-container_MyAccount">
                    <form action className="form-MyAccount">
                        <section>
                            <h1 className="title-MyAccount">My account</h1>
                            <label htmlFor="name" className="label-MyAccount">
                                <span>Name</span>
                            </label>
                            <p className="value-MyAccount">Toni Lopez</p>
                            <label htmlFor="email" className="label-MyAccount">
                                <span>Email address</span>
                            </label>
                            <p className="value-MyAccount">toni@example.com</p>
                            <label htmlFor="password" className="label-MyAccount">
                                <span>Password</span>
                            </label>
                            <p className="value-MyAccount">********</p>
                        </section>
                        <input type="submit" value="Edit" className="secondary-button_MyAccount edit-button_MyAccount" />
                    </form>
                </div>
            </main>
        </div>
    )
}
