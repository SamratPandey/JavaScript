const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

//Get Pokemon Details by Name using this api call
const getPokemon = async (name) => {
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
		const data = await res.json();
		return data;
	} catch (error) {
			return `There is no such Pokemon as ${name.toUpperCase()}, Check the name and try again!`;
	}
}
//Get Pokemon Details by Generation using this api call

const getGeneration = async (gen) =>{
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/generation/${gen}`);
        const data = await res.json();
        return data;
    }catch(error){
        return `Select the right Generation.`;
    }
} 

//Get types of Pokemons using api
const getTypes = async () =>{
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/type`);
        const data = res.json();
        return data;
    }catch(error){
        return `Check the API url`;
    }
} 

//Get all the Pokemon based on types using Api
const getPokemonByType =  async (type) =>{
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = res.json();
        return data;
    }catch(error){
        return `No Pokemon there.`
    }
}

//Display the Pokemon card 
const displayPokemon = (pokemon_details,div) =>{
	const show_list = div;
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


//Display the Error
const displayNotFound = (sms,div) => {
	const show_list = div;
    const errorElement = document.createElement("div");
    errorElement.classList.add('error');

    const errorHTML=`
            <h1>${sms}</h1>
    `;
    errorElement.innerHTML = errorHTML;
    show_list.appendChild(errorElement)
}


export {getPokemon, getGeneration, getPokemonByType, getTypes, displayPokemon, displayNotFound};