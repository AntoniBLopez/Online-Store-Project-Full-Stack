import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Layout } from '../containers/Layout'
import '../styles/globalStyle.css';
import { HomeScreen } from '../containers/HomeScreen';
import { Login } from '../containers/Login';
import { MobileMenu } from '../containers/MobileMenu';
import { HomeMenuDeskstop } from '../containers/HomeMenuDeskstop';
import { CreateAccount } from '../containers/CreateAccount';
import { NewPassword } from '../containers/NewPassword';
import { EmailSend } from '../containers/EmailSend';
import { MyAccount } from '../containers/MyAccount';
import { ProductDetails } from '../containers/ProductDetails';
import { ShoppingCart } from '../containers/ShoppingCart';
import { MyOrder } from '../containers/MyOrder';
import { MyOrdersList } from '../containers/MyOrdersList';

// " Quiero que el enrutamiento del navegador disponga de -->
// estas rutas: y añado los endpoints que deseo. "

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/HomeScreen" element={<HomeScreen />} />
          <Route exact path="/MobileMenu" element={<MobileMenu />} />
          <Route exact path="/HomeMenuDeskstop" element={<HomeMenuDeskstop />} />
          <Route exact path="/CreateAccount" element={<CreateAccount />} />
          <Route exact path="/NewPassword" element={<NewPassword />} />
          <Route exact path="/EmailSend" element={<EmailSend />} />
          <Route exact path="/MyAccount" element={<MyAccount />} />
          <Route exact path="/ProductDetails" element={<ProductDetails />} />
          <Route exact path="/ShoppingCart" element={<ShoppingCart />} />
          <Route exact path="/MyOrder" element={<MyOrder />} />
          <Route exact path="/MyOrdersList" element={<MyOrdersList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}