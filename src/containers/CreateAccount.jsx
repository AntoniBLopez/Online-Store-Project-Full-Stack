import React from 'react'
import '../styles/CreateAccount.scss'
import { Header } from '../components/Header'

export const CreateAccount = () => {
    return (
        <main className='CreateAccount'>
            <Header />
            <main className="CreateAccount-container">
                <div className="form-container_CreateAccount">
                    <form action className="form-CreateAccount">
                        <section>
                            <h1 className="title-CreateAccount">My account</h1>
                            <label htmlFor="name-CreateAccount" className="label-CreateAccount">
                                <span>Name</span>
                            </label>
                            <input type="text" name id="name" className="input-CreateAccount input-name_CreateAccount" placeholder="Toni Lopez" required />
                            <label htmlFor="email" className="label-CreateAccount">
                                <span>Email address</span>
                            </label>
                            <input type="email" name id="email" className="input-CreateAccount input-email_CreateAccount" placeholder="toni@example.com" required />
                            <label htmlFor="password" className="label-CreateAccount">
                                <span>Password</span>
                            </label>
                            <input type="password" name id="password" className="input-CreateAccount input-password_CreateAccount" placeholder="*********" required />
                        </section>
                        <input type="submit" Value="Create" className="primary-button_CreateAccount login-button_CreateAccount" />
                    </form>
                </div>
            </main>
        </main>
    )
}
