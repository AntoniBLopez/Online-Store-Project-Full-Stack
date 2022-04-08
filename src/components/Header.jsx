import React from 'react'
import '../styles/Header.scss'
import menuIcon from '../../assets/pictures/icons/icon_menu.svg'
import logo from '../../assets/pictures/logos/logo_yard_sale.svg'
import shoppingIcon from '../../assets/pictures/icons/icon_shopping_cart.svg'

export const Header = () => {
    return (
        <nav>
            <img src={menuIcon} className="menu" alt="Es el icono del menu" />
            <img src={logo} className="logo" alt="Es el logo de la web" />
            <div className="navbar-left">
                <ul>
                    <li>
                        <a href className="all">All</a>
                    </li>
                    <li>
                        <a href>Clothes</a>
                    </li>
                    <li>
                        <a href>Electronics</a>
                    </li>
                    <li>
                        <a href>Furnitures</a>
                    </li>
                    <li>
                        <a href>Toys</a>
                    </li>
                    <li>
                        <a href>Others</a>
                    </li>
                </ul>

            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">toni@example.com</li>
                    <picture>
                        <img src="https://img.icons8.com/ios/10/000000/expand-arrow--v2.png" alt="" />
                    </picture>
                    <li className="navbar-shopping-cart">
                        <img src={shoppingIcon} alt="Es el carrito de compras" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}