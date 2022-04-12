import React from 'react'
import '../styles/ProductDetails.scss'
import closeIcon from '../../assets/pictures/icons/icon_close.png'
import addToCartIcon from '../../assets/pictures/icons/bt_add_to_cart.svg'

export const ProductDetails = () => {
    return (
        <aside className="ProductDetails-container">
            <div className="product-detail-close_ProductDetails">
                <img src={closeIcon} alt="Es una cruz para cerrar la pestaña" />
            </div>
            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Es una bicicleta" className="product-img" />
            <div className="points-ProductDetails">
                <div />
                <div />
                <div />
            </div>
            <div className="product-info_ProductDetails">
                <p>$ 120,00</p>
                <p>Mountain Bike</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum et officia mollitia nostrum tempora ab error quaerat maiores! Officia eligendi reprehenderit in tempora aliquid!</p>
                <button className="primary-button_ProductDetails add-to-cart-button_ProductDetails">
                    <img src={addToCartIcon} alt="Icono carrito de la compra" />
                    Add to cart
                </button>
            </div>
        </aside>
    )
}
