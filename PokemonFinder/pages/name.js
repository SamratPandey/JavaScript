import {getPokemon, displayPokemon, displayNotFound}  from '../function.js';

const name = document.querySelector("#search-bar");
const searchBtn = document.querySelector(".search-icon");
const show_list = document.querySelector(".show-list");


searchBtn.addEventListener("click", async () => {
    let itemName = name.value.toLowerCase();
    let pokemon = await getPokemon(itemName); 
    show_list.innerHTML = "";
    if (pokemon.id) {
        let pokemon_details = {
            name: pokemon.name ,
            id: pokemon.id, 
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
            type: pokemon.types[0].type.name,
            weight: pokemon.weight,
            number: pokemon.order
        }
        displayPokemon(pokemon_details,show_list);
    }else{
        displayNotFound(pokemon,show_list);
    }
    name.value = "";
});
