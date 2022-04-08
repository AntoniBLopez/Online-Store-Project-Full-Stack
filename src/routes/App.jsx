import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Layout } from '../containers/Layout'
import '../styles/global.css';
import { NewPassword } from '../containers/NewPassword';
import { EmailSend } from '../containers/EmailSend';

// " Quiero que el enrutamiento del navegador disponga de -->
// estas rutas: y añado los endpoints que deseo. "

export const App = () => {
  return (
    <BrowserRouter> // enrutamiento del navegador
      <Layout> // Layout = Dispongo
        <Routes> // de estas rutas // Aquí empezamos a escribir las rutas
          <Route exact path="/" element={<Home />} />
          <Route exact path="/NewPassword" element={<NewPassword />} />
          <Route exact path="/EmailSend" element={<EmailSend />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}