import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

//Outlet is the feature provided by react-router-dom to insert components in a specific layout.
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout