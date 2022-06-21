import '/src/w3.css';
import logo from '/src/assets/ts.png';
import solidlogo from '/src/assets/logo.svg';
import type { Component } from 'solid-js';


const Footer: Component = () => {
  return (
    // using w3 without jsx because it contains dashes which are invalid in jsx
    <div>
        <div class="w3-bar w3-deep-orange w3-center w3foot w3-round-large">
            <p class="w3-center">Made by Mark Robillard Jr <br></br>This app is not affiliated with Home Depot or NASCAR. It is just my testing playground for the SolidJS Javascript framework and Typescript.
            <br></br>

            <a href="https://www.typescriptlang.org/" class="">
            <img src={logo} class="logotsolid w3-center" alt="logo" />
            </a>
            
            <a href="https://www.solidjs.com/" class="">
            <img src={solidlogo} class="logotsolid w3-center" alt="logo" />
            </a>
            </p>
            
            
        </div>
     </div>
  );
}

export default Footer;
