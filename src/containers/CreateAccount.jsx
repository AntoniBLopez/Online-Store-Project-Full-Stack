import React from 'react'
import '../styles/CreateAccount.scss'

export const CreateAccount = () => {
    return (
        <main className="main-login">
            <div className="form-container">
                <form action className="form">
                    <section>
                        <h1 className="title">My account</h1>
                        <label htmlFor="name" className="label">
                            <span>Name</span>
                        </label>
                        <input type="text" name id="name" className="input input-name" placeholder="Toni Lopez" required />
                        <label htmlFor="email" className="label">
                            <span>Email address</span>
                        </label>
                        <input type="email" name id="email" className="input input-email" placeholder="toni@example.com" required />
                        <label htmlFor="password" className="label">
                            <span>Password</span>
                        </label>
                        <input type="password" name id="password" className="input input-password" placeholder="*********" required />
                    </section>
                    <input type="submit" defaultValue="Create" className="primary-button login-button" />
                </form>
            </div>
        </main>
    )
}
