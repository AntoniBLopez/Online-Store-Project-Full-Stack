import React from 'react'
import '../styles/MyOrdersList.scss'
import ArrowIcon from '../../assets/pictures/icons/flechita.svg'
import { Header } from '../components/Header'

export const MyOrdersList = () => {
    return (
        <div className="MyOrdersList">
            <Header />

            <main className="MyOrdersList-container">
                <div className="my-order-container_MyOrdersList">
                    <h1 className="title-order_MyOrdersList">My orders</h1>
                    <div className="my-order-content_MyOrdersList">
                        <div className="order-MyOrdersList">
                            <div>
                                <p>
                                    <span>10.03.2021</span>
                                    <span>6 articles</span>
                                </p>
                            </div>
                            <p>$720.00</p>
                            <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                        </div>
                        <div className="order-MyOrdersList">
                            <div>
                                <p>
                                    <span>10.03.2021</span>
                                    <span>6 articles</span>
                                </p>
                            </div>
                            <p>$720.00</p>
                            <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                        </div>
                        <div className="order-MyOrdersList">
                            <div>
                                <p>
                                    <span>10.03.2021</span>
                                    <span>6 articles</span>
                                </p>
                            </div>
                            <p>$720.00</p>
                            <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                        </div>
                        <div className="order-MyOrdersList">
                            <div>
                                <p>
                                    <span>10.03.2021</span>
                                    <span>6 articles</span>
                                </p>
                            </div>
                            <p>$720.00</p>
                            <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                        </div>
                        <div className="order-MyOrdersList">
                            <div>
                                <p>
                                    <span>10.03.2021</span>
                                    <span>6 articles</span>
                                </p>
                            </div>
                            <p>$720.00</p>
                            <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                        </div>
                        <div className="order-MyOrdersList">
                            <div>
                                <p>
                                    <span>10.03.2021</span>
                                    <span>6 articles</span>
                                </p>
                            </div>
                            <p>$720.00</p>
                            <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
