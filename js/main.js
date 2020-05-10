
//
// function fetchCharacters(){
//   axios.get('http://hp-api.herokuapp.com/api/characters')
//      //convert to JSON
//     .then((characters) => { // characters are all the objects w
//       characters.forEach(() => {
//         console.log(characters);
//       })
//     })
//     .catch(error => console.error(error));
// }
//
// fetchCharacters();


axios.get('http://hp-api.herokuapp.com/api/characters')
  .then((response) => {
    // handle success
    console.log(response);
    response.data.forEach((character) => {
      // console.log(character);
      // console.log(character.name);
     renderCharacters(character);

    })
  })
  .catch((error) =>  {
    // handle error
    // console.log(error);
  })
  .then(() =>  {
    // always executed
  });


function renderCharacters(character){
  console.log("hi");
  console.log(character);
  let allCharactersContainer = document.getElementById('hp-container');
  let charactersContainer = document.createElement("div"); //div will be used to hold the data/details for indiviual pokemon.{}

  let characterName = document.createElement('h4');
  characterName.innerText = ` Name: ${character.name}`;

  let characterPatronus = document.createElement('h4');
  characterPatronus.innerText = `Patronus: ${character.patronus}`;

  let characterHouse = document.createElement('h4');
  characterHouse.innerText = `House: ${character.house}`;

  // create a span
  var characterImage = document.createElement("span");
  // create an image tag
  var img = document.createElement("img");

  // give the image tag an attribute called src and set it equal to the character url
  img.setAttribute("src",  character.image);

  // add created image to the span
  characterImage.appendChild(img);

// helper function to go through the types array and create li tags for each one
  charactersContainer.append(characterName, characterPatronus, characterHouse,characterImage);
// appending all details to the pokeContainer div which was created
  allCharactersContainer.appendChild(charactersContainer);
// appending that characters container  div to the main div which will hold all the hp cards

}



