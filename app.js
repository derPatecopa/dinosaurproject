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

// Create Human Object
const grid = document.querySelector("#grid");
//creating grid Div
const gridTile = document.createElement("div");
//filling a grid tile with content

const form = document.querySelector("#dino-compare");
const compareButton = document.querySelector("#btn");
compareButton.addEventListener("click", () => {
  // Use IIFE to get human data from form
  //IIFE
  (() => {
    const name = document.querySelector("#name").value;
    const feet = parseFloat(document.querySelector("#feet").value);
    const inches = parseFloat(document.querySelector("#inches").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const diet = document.querySelector("#diet").value;

    const human = {
      name: name,
      feet: feet,
      inches: inches,
      weight: weight,
      diet: diet,
    };
    gridTile.innerHTML = `<img src='images/human.png'>
                   <h3>${human.name}</h3>`;
  })();
  // Create Dino Objects
  fetch("dino.json")
    .then((response) => response.json())
    .then((data) => {
      //map function returns an array
      const dinos = data.Dinos.map(
        (dino) =>
          new Dino(
            dino.species,
            dino.weight,
            dino.height,
            dino.diet,
            dino.where,
            dino.when,
            dino.fact
          )
      );
      dinos.forEach((dino) => {
        const tile = document.createElement("div");
        tile.classList.add("grid-item");

        const image = document.createElement("img");
        image.src = `images/${dino.species.toLowerCase()}.png`;
        tile.appendChild(image);

        const name = document.createElement("h3");
        name.textContent = dino.species;
        tile.appendChild(name);

        const fact = document.createElement("p");
        fact.textContent = getRandomFact(dino);
        tile.appendChild(fact);

        grid.appendChild(tile);
      });

      function getRandomFact(dino) {
        const facts = [
          dino.fact,
          `The ${dino.species} lived in ${dino.where}.`,
          `The ${dino.species} lived during the ${dino.when} period.`,
          `The ${dino.species} was a ${dino.diet}.`,
          `The ${dino.species} weighed ${dino.weight}.`,
          `The ${dino.species} was ${dino.height} feet tall.`,
        ];
        return facts[Math.floor(Math.random() * facts.length)];
      }
      // Use the dinos array to generate tiles for each Dino
      // and add them to the grid
    });
  //removing the form
  form.remove();
  //creating the grid
  grid.appendChild(gridTile);
});

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
