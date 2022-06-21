import type { Component } from 'solid-js';
import '/src/w3.css';

const calcpaint: Function = () => {
    const project = document.getElementById("projects") as HTMLSelectElement;
    const result = document.getElementById("calcresult") as HTMLParagraphElement;

    if (project.value == "Small Chair" || project.value == "Bike"){
      result.innerHTML = "A " + project.value +" should require 1 12oz can of spray paint.";
    }
    else if (project.value == "Coffee Table" || project.value == "Small Dresser"){
      result.innerHTML = "A " + project.value +" should require 2 12oz cans of spray paint.";
    }
}

const IndexBody: Component = () => {
  return (
    <div class="w3-container">
      <div class="header w3-container w3-card w3-center calccell w3-round-large">
        <h1 class="bodyheader w3-animate-opacity">Spray Paint Calculator</h1>
        <p>Select your project, and then click Calculate to find how much Rust-Oleum Painter's Touch Ultra Cover 2X spray paint will be needed.</p>
        <form id="calcfrm" class="w3-container">
        <label for="projects">Choose a Project to paint:<br></br></label>
        <select id="projects" class="w3-cell cellobjects" name="projects">
          <option value="Small Chair">Small Chair</option>
          <option value="Small Dresser"> Small Dresser</option>
          <option value="Coffee Table">Coffee Table</option>
          <option value="Bike" >Bike</option>
        </select>
        <br></br>

      <input type="button" class="w3-button w3-deep-orange w3-cell" onclick={() => calcpaint()} value="Calculate"/>
        </form>
      <p id="calcresult" class="w3-deep-orange"></p>
      </div>
      
    </div>
  );
};

export default IndexBody;
