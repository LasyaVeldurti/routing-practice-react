// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'

import {Home} from '../Home'

import './index.css'

const Header = () => (
  <ul className="ul-container">
    <li className="li-container">
      <img
        className="logo-img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </li>
    <li className="li-container">
      <Link to="/">Home</Link>
    </li>
  </ul>
)

export default Header
