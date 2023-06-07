import React from 'react'
import classes from './Nav.module.css'

const Nav = () => {
  return (
    <div className={classes.nav}>
      <p className={classes.logo}>Cleverse</p>
      <ul className={classes.menu}>
        <li className={classes.menulink}>About Us</li>
        <li className={classes.menulink}>Blog</li>
        <li className={classes.menulink}>Career</li>
        <li className={classes.menulink}>Contact Us</li>
      </ul>
    </div>
  )
}

export default Nav
