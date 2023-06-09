// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="routing-container">
    <div className="logo-container">
      <img
        className="logo-img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </div>
    <ul className="ul-container">
      <li className="li-container">
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li className="li-container">
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li className="li-container">
        <Link className="link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
