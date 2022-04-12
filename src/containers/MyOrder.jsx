import React from 'react'
import '../styles/MyOrder.scss'
import { Header } from '../components/Header'

export const MyOrder = () => {
    return (
        <div className="MyOrder">
            <Header />
            <main className="my-order">
                <div className="my-order-container">
                    <h1 className="title-order">My order</h1>
                    <div className="my-order-content">
                        <div className="order-MyOrder">
                            <div>
                                <p>
                                    <span>10.03.2021</span>
                                    <span>6 articles</span>
                                </p>
                            </div>
                            <p>$720.00</p>
                        </div>
                        <div className="shopping-cart_MyOrder">
                            <figure>
                                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                            </figure>
                            <p>Bike</p>
                            <p>$120,00</p>
                        </div>
                        <div className="shopping-cart_MyOrder">
                            <figure>
                                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                            </figure>
                            <p>Bike</p>
                            <p>$120,00</p>
                        </div>
                        <div className="shopping-cart_MyOrder">
                            <figure>
                                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                            </figure>
                            <p>Bike</p>
                            <p>$120,00</p>
                        </div>
                        <div className="shopping-cart_MyOrder">
                            <figure>
                                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                            </figure>
                            <p>Bike</p>
                            <p>$120,00</p>
                        </div>
                        <div className="shopping-cart_MyOrder">
                            <figure>
                                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                            </figure>
                            <p>Bike</p>
                            <p>$120,00</p>
                        </div>
                        <div className="shopping-cart_MyOrder">
                            <figure>
                                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                            </figure>
                            <p>Bike</p>
                            <p>$120,00</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
