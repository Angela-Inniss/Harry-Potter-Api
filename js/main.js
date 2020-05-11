axios.get('http://hp-api.herokuapp.com/api/characters')
  .then((response) => {
    // handle success
    console.log(response);
    response.data.forEach((character) => {
      renderCharacters(character);
    })
  })
  .catch((error) =>  {
    // handle error
    console.log(error);
  })
  .then(() =>  {
    // always executed
  });

function renderCharacters(character){
  let allCharactersContainer = document.getElementById('hp-container');

  let charactersContainer = document.createElement("div"); // div will be used to hold the data/details for indiviual pokemon.{}
  charactersContainer.classList.add('ui', 'card'); // adds a class to the container

  // create a span
  var characterImage = document.createElement("span");
  // create an image tag
  var img = document.createElement("img");
  // give the image tag an attribute called src and set it equal to the character url
  img.setAttribute("src",  character.image);
  // add created image to the span
  characterImage.appendChild(img);
  characterImage.classList.add('image');

  let infoBlock = document.createElement('span');
  infoBlock.classList.add('info-block'); // adding class

  let characterName = document.createElement('h5');
  characterName.innerText = ` Name: ${character.name}`;

  let characterPatronus = document.createElement('h6');
  characterPatronus.innerText = `Patronus: ${character.patronus}`;

  let characterHouse = document.createElement('h6');
  characterHouse.innerText = `House: ${character.house}`;
//
  infoBlock.append(characterName, characterPatronus,characterHouse);
// helper function to go through the types array and create li tags for each one
  charactersContainer.append(characterImage,infoBlock);
// appending all details to the pokeContainer div which was created
  allCharactersContainer.appendChild(charactersContainer);
// appending that characters container  div to the main div which will hold all the hp cards
}

