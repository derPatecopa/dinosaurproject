// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// Create Dino Objects

// Create Human Object

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array
const grid = document.querySelector('#grid');
const gridTile = document.createElement('div');
gridTile.innerHTML = `<img src='images/anklyosaurus.png'>
                    <h3>Test Tile</h3>`;
// Add tiles to DOM
grid.appendChild(gridTile);

// Remove form from screen
const form = document.querySelector('#dino-compare');
const compareButton = document.querySelector('#btn');
compareButton.addEventListener('click', function() {
    form.remove();
})
// On button click, prepare and display infographic
