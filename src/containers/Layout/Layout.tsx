import * as React from 'react'
import Footer from '../../components/Footer'
import AppRouter from '../AppRouter'

const Layout = () => {
  return (
    <React.Fragment>
      <AppRouter />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
