import type { Component } from 'solid-js';

import car from '/src/assets/nascar.jpg';
import number from '/src/assets/20.png';
import '/src/w3.css';

const Carside: Component = () => {
  return (
    <div class="w3-container bodycont w3-center w3-card w3-round-large">
      <img src={car} class="w3-animate-right" alt="logo" style="width:100%;" /> 
      <p class="w3-deep-orange w3-animate-fading w3-round-large">Tony Stewart's #
        <img src={number} class="w3-animate-right" alt="logo" style="width:24px; height:26px;"/> Home Depot NASCAR<br></br> Check out that Safety Orange! 😲
      </p>
    </div>
    
  );
};

export default Carside;
