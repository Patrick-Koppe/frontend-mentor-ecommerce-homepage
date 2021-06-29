import * as React from 'react'
import { Link } from 'gatsby'

import "./mainmenu.scss"

const MainMenu = () => {
  return (
    <nav className="mainmenu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/about">Über uns</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </nav>
  )

}

export default MainMenu