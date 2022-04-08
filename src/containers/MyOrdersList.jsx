import React from 'react'
import '../styles/MyOrdersList.scss'
import ArrowIcon from '../../assets/pictures/icons/flechita.svg'

export const MyOrdersList = () => {
    return (
        <main className="my-order">
            <div className="my-order-container">
                <h1 className="title-order">My orders</h1>
                <div className="my-order-content">
                    <div className="order">
                        <div>
                            <p>
                                <span>10.03.2021</span>
                                <span>6 articles</span>
                            </p>
                        </div>
                        <p>$720.00</p>
                        <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                    </div>
                    <div className="order">
                        <div>
                            <p>
                                <span>10.03.2021</span>
                                <span>6 articles</span>
                            </p>
                        </div>
                        <p>$720.00</p>
                        <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                    </div>
                    <div className="order">
                        <div>
                            <p>
                                <span>10.03.2021</span>
                                <span>6 articles</span>
                            </p>
                        </div>
                        <p>$720.00</p>
                        <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                    </div>
                    <div className="order">
                        <div>
                            <p>
                                <span>10.03.2021</span>
                                <span>6 articles</span>
                            </p>
                        </div>
                        <p>$720.00</p>
                        <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                    </div>
                    <div className="order">
                        <div>
                            <p>
                                <span>10.03.2021</span>
                                <span>6 articles</span>
                            </p>
                        </div>
                        <p>$720.00</p>
                        <img src={ArrowIcon} alt="Es una flecha para acceder al contenido" />
                    </div>
                    <div className="order">
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
    )
}
