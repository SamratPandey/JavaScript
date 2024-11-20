import {colors}  from '../colors.js';

const name = document.querySelector("#search-bar");
const searchBtn = document.querySelector(".search-icon");
const show_list = document.querySelector(".show-list");

const getPokemon = async (name) => {
try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    return data;
} catch (error) {
        return `There is no such Pokemon as ${name}, Check the name and try again`;
    }
}



const displayPokemon = (pokemon_details) =>{
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const number = pokemon_details.number;
    const img = pokemon_details.img;
    const type = pokemon_details.type;
    const name = (pokemon_details.name).charAt(0).toUpperCase() + (pokemon_details.name).slice(1).toLowerCase();
    const color = colors[type];
    const weight = pokemon_details.weight;
    
    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="${img}" />
        </div>
        <div class="info">
            <span class="number">#${number}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
            <small class="type">Weight: <span>${weight}</span></small>
        </div>`;

    pokemonEl.innerHTML = pokemonInnerHTML;

    show_list.appendChild(pokemonEl);

}


searchBtn.addEventListener("click", async () => {
    let itemName = name.value.toLowerCase();
    let pokemon = await getPokemon(itemName); 
    
    show_list.innerHTML = "";

    if (pokemon) {
        let pokemon_details = {
            name: pokemon.name ,
            id: pokemon.id, 
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
            type: pokemon.types[0].type.name,
            weight: pokemon.weight,
            number: pokemon.order
        }
        displayPokemon(pokemon_details);
    } 
    name.value = "";
});
