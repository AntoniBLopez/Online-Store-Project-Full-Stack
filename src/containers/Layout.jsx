import React from 'react'

export const Layout = ({ children }) => { // vamos a llamar a un hijo con children
  return (
    <div className="Layout">
        {children}
    </div>
  )
}
