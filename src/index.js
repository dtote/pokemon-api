import "./components/PokemonCard.js";

for (let i = 1; i <= 151; i++) {
  // const card = document.createElement("pokemon-card");
  // card.className = "index";
  // card.setAttribute("index", i);

  // domBody.appendChild(card);

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  <pokemon-card class="${i}"><pokemon-card>
  `;
  document.querySelector("body").appendChild(card);
}
