//selecting and creating compare Button
const compareButton = document.querySelector("#btn");

//adding Event Listener on Button Click
compareButton.addEventListener("click", () => {
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

  //creating Grid
  const grid = document.querySelector("#grid");

  //creating Array of 9 tiles
  const allTiles = Array(9);

  //creating grid Div and adding grid-item Style
  const humanTile = document.createElement("div");
  humanTile.classList.add("grid-item");

  // Use IIFE to get human data from form
  (() => {
    // Human Constructor
    function Human(name, feet, inches, weight, diet) {
      (this.name = name),
        (this.feet = feet),
        (this.inches = inches),
        (this.weight = weight),
        (this.diet = diet);
    }

    //selecting values from form for human object
    const name = document.querySelector("#name").value;
    const feet = parseFloat(document.querySelector("#feet").value);
    const inches = parseFloat(document.querySelector("#inches").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const diet = document.querySelector("#diet").value;

    //creating Human object
    const human = new Human(name, feet, inches, weight, diet);

    //selecting name and image for human tile
    const humanImage = document.createElement("img");
    humanImage.src = `images/human.png`;

    const humanName = document.createElement("h3");
    humanName.textContent = human.name;

    //constructing the human tile, order matters
    humanTile.appendChild(humanName);
    humanTile.appendChild(humanImage);

    //placing human tile in the middle
    allTiles[4] = humanTile;
  })();

  // Create Dino Objects    
  //getting local json data
  fetch("dino.json")
  //turn it into json object
    .then((response) => response.json())
    //selecting it to use a function on it
    .then((data) => {
        //mapping every object in the json object to Dino constructor
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
      dinos.forEach((dino, index) => {
        //creating a Dino Tile
        const dinoTile = document.createElement("div");
        dinoTile.classList.add("grid-item");

        //setting an image for the Tile
        const image = document.createElement("img");
        image.src = `images/${dino.species.toLowerCase()}.png`;

        //setting the fact for the Dino Tile
        const fact = document.createElement("p");
        if (dino.species === "Pigeon" ) {
         fact.textContent = dino.fact;
        }
        else 
        fact.textContent = getRandomFact(dino);

        //setting a Name for the Dino Tile
        const name = document.createElement("h3");
        name.textContent = dino.species;

        //appending the Dino Tile with each part in the right order to be displayed
        dinoTile.appendChild(name);
        dinoTile.appendChild(fact);
        dinoTile.appendChild(image);

        if (index === 4) {
          allTiles[index + 4] = dinoTile;
        } else allTiles[index] = dinoTile;
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
      const form = document.querySelector("#dino-compare");
      form.remove();
      //creating the grid
      grid.innerHTML = "";

      allTiles.forEach((tile) => {
        grid.appendChild(tile);
      });
    });
});

