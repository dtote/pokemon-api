import{L as e,c as t,h as o}from"./vendor.8c9d1176.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const i=new URL(e,s);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const a=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){r(new Error(`Failed to import: ${e}`)),n(m)},onload(){o(self[t].moduleMap[i]),n(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/pokemon-api/");customElements.define("pokemon-card",class extends e{firstUpdated(){this.index=this.getAttribute("index"),this.getPokemon()}static get properties(){return{order:Number,name:String,type:Array,height:Number,weight:Number,moves:Array,image:String,index:Number}}getPokemon(){return fetch(`https://pokeapi.co/api/v2/pokemon/${this.index}`).then((e=>e.json())).then((e=>{this.data=e,this.order=e.order,this.name=e.name,this.image=e.sprites.back_default,this.backImage=e.sprites.front_default,this.type=e.type,this.weight=e.weight,this.height=e.height,this.moves=e.moves})).catch((e=>console.error(e)))}static get styles(){return t`
    :host {
      display: block;
      padding: 20px;
      margin: auto;
      width: 1400px;
      background-color: grey;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      border-radius: 20px;
      margin-bottom: 50px;
    }

    .pokemon-physical {
      font-size: 20px;
    }
`}getAllMoves(){return this.moves.map((e=>e.move.name)).join(", ")}getAllTypes(){return this.type.map((e=>e.type.name)).join(", ")}render(){return o`
    <div class="container">
      <img class="pokemon-image" src="${this.image}" alt="Pic of ${this.name}">
      <h3 class="pokemon-name">${this.order+". "+this.name}</h3>
      <span class="pokemon-type">${this.type}</span>
      <div class="pokemon-physical">
        <span class="pokemon-weight"><strong>Weight:</strong> ${this.weight+" kg"}</span>
        <span class="pokemon-height"><strong>Height:</strong> ${this.height+" cm"}</span>
      </div>
      <div class="pokemon-moves">
        <br><strong>Movements:</strong><br><br>${this.getAllMoves()}
      </div>
    </div>
    `}});for(let s=1;s<=151;s++){const e=document.createElement("pokemon-card");e.innerHTML=`\n  <pokemon-card index=${s}><pokemon-card>\n  `,document.querySelector("body").appendChild(e)}document.querySelector(".card");
