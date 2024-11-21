import { getTypes, getPokemonByType, getPokemon, getGeneration, displayPokemon } from "../function.js";

const select = document.querySelector("#select");
const search = document.querySelector('.search-btn');
const show_list = document.querySelector('.show-list');

select.addEventListener("focus",async ()=>{
    let typesData = await getTypes();
    let types = typesData.results;   
        types.map((type) => {
            let option = document.createElement("option");   
            let url = type.url;
            option.value = url.split('/').filter(Boolean).pop();
            option.textContent = (type.name).charAt(0).toUpperCase() + (type.name).slice(1).toLowerCase();
            select.appendChild(option);
        });

})

search.addEventListener("click",async ()=>{
    const type = select.value; 
    const typeData = await getPokemonByType(type);
    const pokeNames = typeData.pokemon;
    show_list.innerHTML = "";
    pokeNames.map(async pokeName => {
        let pokemon = await getPokemon(pokeName.pokemon.name);
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