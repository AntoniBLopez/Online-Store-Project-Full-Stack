import React from 'react'
import '../styles/NotFound.scss'
import * as Home from './Home'

export const NotFound = () => { // I add a template for this endpoint
  return (
    <div className='NotFound-container'>
      <h1 className='h1-NotFound'>404 Error Page</h1>
      <p className="zoom-area"><b>Oops!</b> Looks like you got lost</p>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        <a target="_blank" href={Home} className="more-link">Go to Home</a>
      </div>
    </div>
  )
}