import React from 'react'
import '../styles/MyAccount.scss'

export const MyAccount = () => {
    return (
        <main className="main-login">
            <div className="form-container">
                <form action className="form">
                    <section>
                        <h1 className="title">My account</h1>
                        <label htmlFor="name" className="label">
                            <span>Name</span>
                        </label>
                        <p className="value">Toni Lopez</p>
                        <label htmlFor="email" className="label">
                            <span>Email address</span>
                        </label>
                        <p className="value">toni@example.com</p>
                        <label htmlFor="password" className="label">
                            <span>Password</span>
                        </label>
                        <p className="value">********</p>
                    </section>
                    <input type="submit" defaultValue="Edit" className="secondary-button edit-button" />
                </form>
            </div>
        </main>

    )
}
