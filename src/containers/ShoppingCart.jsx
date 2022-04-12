import React from 'react'
import '../styles/ShoppingCart.scss'
import arrowIcon from '../../assets/pictures/icons/flechita.svg'
import closeIcon from '../../assets/pictures/icons/icon_close.png'

export const ShoppingCart = () => {
    return (
        <aside className="ShoppingCart-container">
            <div className="title-container_ShoppingCart">
                <img src={arrowIcon} alt="Flecha para volver atrás" />
                <p className="title-ShoppingCart">Shopping cart</p>
            </div>
            <div className="my-order-content_ShoppingCart">
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$120,00</p>
                    <img src={closeIcon} alt="Quitar producto del carrito" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$120,00</p>
                    <img src={closeIcon} alt="Quitar producto del carrito" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$120,00</p>
                    <img src={closeIcon} alt="Quitar producto del carrito" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$120,00</p>
                    <img src={closeIcon} alt="Quitar producto del carrito" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$120,00</p>
                    <img src={closeIcon} alt="Quitar producto del carrito" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$120,00</p>
                    <img src={closeIcon} alt="Quitar producto del carrito" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$120,00</p>
                    <img src={closeIcon} alt="Quitar producto del carrito" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$120,00</p>
                    <img src={closeIcon} alt="Quitar producto del carrito" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$120,00</p>
                    <img src={closeIcon} alt="Quitar producto del carrito" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$120,00</p>
                    <img src={closeIcon} alt="Quitar producto del carrito" />
                </div>
                <div className="order-ShoppingCart">
                    <div>
                        <p>
                            <span>Total</span>
                        </p>
                    </div>
                    <p>$720.00</p>
                </div>
                <input type="submit" className="primary-button_ShoppingCart" value="Checkout" />
            </div>
        </aside>
    )
}
