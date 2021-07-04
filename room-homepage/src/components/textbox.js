import * as React from 'react'
import { Link } from 'gatsby'



import './textbox.scss'

const TextBox = () => {
  return (

    <div className="textbox">
      <h1>Discover innovative ways to decorate</h1>
      <p>We provide unmatched quality, comfort, and style for property owners across the country.
        Our experts combine form and function bringing your vision to life. Create a room in your
        own style with our collection and make your property a reflection of you and what you love.
      </p>
      <Link className="link-btn" to="/shop">Shop Now</Link>
    </div>
  )

}

export default TextBox