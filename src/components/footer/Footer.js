import React from 'react'
import classes from './Footer.module.scss';

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
    <p>
   &copy; {year} All rights reserved

    </p>
    </footer>
  )
}

export default Footer