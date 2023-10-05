console.log('JS Connected');

const mainScreen = document.querySelector('.main-screen')
const APIurl = 'https://pokeapi.co/api/v2/pokemon'
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFImg = document.querySelector('.poke-front-img');
const pokeBImg = document.querySelector('.poke-back-img');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');

const TYPES = [
	'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost',  'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];

let prevUrl = null;
let nextUrl = null;



async function fetchPokemon(){
	try{
		response = await fetch(APIurl);
		data = await response.json();
		console.log(data.results);
		displayPokemon(data.results);
	} catch(error){
		console.log('Error occured', error);
	}
}

function displayPokemon(results){
	console.log(results[0]);

}

function handleBtnClick(event){
	if (event.target.classList === 'left-btn' || event.target.classList === 'right-btn'){
		displayPokemon();
	}
}

console.log(fetchPokemon());
