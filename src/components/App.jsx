import React from 'react'
import { Layout } from '../containers/Layout'
import '../styles/global.css';
import { Login } from '../containers/Login';

export const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}