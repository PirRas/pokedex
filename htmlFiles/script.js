// Globale Variablen
const pokemonBilderQuelle = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const pokemons = [
  { name: "Pikachu", type: "Elektro", image: `${pokemonBilderQuelle}25.png` },
  { name: "Glumanda", type: "Feuer", image: `${pokemonBilderQuelle}4.png` },
  { name: "Schiggy", type: "Wasser", image: `${pokemonBilderQuelle}7.png` },
  { name: "Bisasam", type: "Pflanze", image: `${pokemonBilderQuelle}1.png` },
  { name: "Evoli", type: "Normal", image: `${pokemonBilderQuelle}133.png` }
];


// HTML-Elemente
let firstSection = document.createElement("div");
firstSection.id = "title-section";
firstSection.classList.add("container");
document.body.appendChild(firstSection);

let title = document.createElement("h1");
title.id = "title";
title.innerText = "Pokédex";
firstSection.appendChild(title);

let pokemonCards = document.createElement("div");
pokemonCards.id = "pokemon-cards";
pokemonCards.classList.add("container");
document.body.appendChild(pokemonCards);

let detailSection = document.createElement("div");
detailSection.id = "pokemon-detail-view"
detailSection.classList.add("container", "d-none");

// Funktionen
function displaySinglePokemon(pokemon) {
  pokemonCards.classList.toggle("d-none");
  detailSection.classList.toggle("d-none");

  const card = createPokemonCard(pokemon)
  detailSection.appendChild(card);
}

function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = pokemon.name;

  const image = document.createElement("img");
  image.src = pokemon.image;
  image.alt = pokemon.name;

  const type = document.createElement("p");
  type.textContent = "Typ: " + pokemon.type;

  card.appendChild(cardTitle);
  card.appendChild(image);
  card.appendChild(type);

  return card;
}

for (const pokemon of pokemons){
    
    const card = createPokemonCard(pokemon)

    card.addEventListener("click", function() {
        displaySinglePokemon(pokemon);
    });
    pokemonCards.appendChild(card);
}

document.body.appendChild(detailSection);
