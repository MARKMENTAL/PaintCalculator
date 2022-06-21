import type { Component } from 'solid-js';

import logo from '/src/assets/logo.png';
import '/src/w3.css';

const Navbar: Component = () => {
  return (
    <div class="w3-bar w3-deep-orange w3-round-large w3bar">
   <a href="/index.html" class="w3-bar-item w3-button">
    <img src={logo} class="navbar_img logo" alt="logo" />
    </a>
</div>
  );
};

export default Navbar;
