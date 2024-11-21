import { getPokemon, getGeneration, displayPokemon } from "../function.js";


const btn = document.querySelector(".search-btn");
const select = document.querySelector("#select");
const show_list = document.querySelector(".show-list");



btn.addEventListener("click",async function(){
    const selectGen = select.value;
    select.value = "";
    const genData = await getGeneration(selectGen);
    const pokeNames = genData.pokemon_species;
    show_list.innerHTML = "";
    pokeNames.map(async pokeName => {
        let pokemon = await getPokemon(pokeName.name);
        let pokemon_details ={
            name: pokemon.name ,
            id: pokemon.id, 
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
            type: pokemon.types[0].type.name,
            weight: pokemon.weight,
            number: pokemon.order
        }
        displayPokemon(pokemon_details,show_list);
    });

})
