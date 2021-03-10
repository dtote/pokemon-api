import { LitElement, html, css } from "lit-element";

class PokemonCard extends LitElement {
  constructor() {
    super();
    this.getPokemon();
  }

  static get properties() {
    return {
      order: Number,
      name: String,
      type: Array,
      height: Number,
      weight: Number,
      moves: Array,
      image: String,
      index: Number
    };
  }

  getPokemon() {
    if (this.index !== undefined) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.getAttribute("index")}`)
        .then((response) => response.json())
        .then((data) => {
          this.order = data.order;
          this.name = data.name;
          this.image = data.sprites.front_default;
          this.type = data.type;
          this.weight = data.weight;
          this.height = data.height;
          this.moves = data.moves;
          this.index = this.getAttribute("index");
        })
        .catch((error) => console.error(error));
    }
    // return pokemon;
  }

  static get styles() {
    return css`
    :host {
      display: block;
      padding: 20px;
      margin: auto;
      width: 1400px;
      height: 400px;
      background-color: grey;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      border-radius: 20px;
      margin-bottom: 50px;
    }

    .pokemon-image {
      align-self: center;
    }

    .pokemon-physical {
      font-size: 20px;
    }
`;
  }

  getAllMoves() {
    return this.moves.map((move) => move.move.name).join(", ");
  }

  getAllTypes() {
    return this.type.map((type) => type.type.name).join(", ");
  }

  render() {
    return html`
    <div class="container">
      <img class="pokemon-image" src="${this.image}" alt="Pic of ${this.name}">
      <h3 class="pokemon-name">${this.order + ". " + this.name}</h3>
      <span class="pokemon-type">${this.type}</span>
      <div class="pokemon-physical">
        <span class="pokemon-weight"><strong>Weight:</strong> ${this.weight + " kg"}</span>
        <span class="pokemon-height"><strong>Height:</strong> ${this.height + " cm"}</span>
      </div>
      <div class="pokemon-moves">
        <br><strong>Movements:</strong><br><br>${this.getAllMoves()}
      </div>
    </div>
    `;
  }
}
customElements.define("pokemon-card", PokemonCard);
