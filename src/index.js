import "./components/PokemonCard.js";

for (let i = 1; i <= 151; i++) {
  const card = document.createElement("pokemon-card");
  card.innerHTML = `
  <pokemon-card index=${i}><pokemon-card>
  `;
  document.querySelector("body").appendChild(card);
}

const PokemonCard = document.querySelector(".card");
