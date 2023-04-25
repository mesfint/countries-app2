import React from 'react'
import styles from './Layout.module.scss'
import Footer from '../footer/Footer'
import Header from '../header/Header'


const Layout = ({children}) => {
  return (
    <div className={styles.layout} >
    <Header />
    <div>{children}</div>
    <Footer />

    </div>
  )
}

export default Layout