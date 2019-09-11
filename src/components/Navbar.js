import React, { Component } from "react";
import logo from "../img/bandlogo.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id='navbar'>
          <div className='logo'>
            <img src={logo} alt='band logo' />
          </div>
          <ul>
            <li>
              <a href='/'>News</a>
            </li>
            <li>
              <a href='/discography'>Discography</a>
            </li>
            <li>
              <a href='/live'>Live</a>
            </li>
            <li>
              <a href='/store'>Store</a>
            </li>
            <li>
              <a href='/follow'>Follow</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
