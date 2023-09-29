const url = 'https://api.thecatapi.com/v1/images/search';
const catBtn = document.querySelector('#catBtn');


async function fetchCat(){
	try{
		let response = await fetch(url);
		let data = await response.json();
		displayCat(data[0].url);
	} catch(error){
		console.error('There was an error', error)
	}
}

function displayCat(catUrl){
	const img = document.createElement('img');
	img.src = catUrl;
	img.alt = "random cat photo";
	img.width = 500;
	document.querySelector('#catsDiv').appendChild(img);
}

catBtn.addEventListener('click', fetchCat);