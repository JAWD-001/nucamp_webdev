const color1 = document.getElementById('color1');

const color2 = document.getElementById('color2');

const h3 = document.getElementsByTagName('h3');

const body = document.getElementById('body');

const colorDivs = document.querySelector('div')


colorDivs.addEventListener('input', changeBackground)



function changeBackground(event) {
	if (event.target.id === 'color1'){
	body.style.background = "linear-gradient(to right," 
	+ event.target.value 
	+ "," 
	+ color2.value
	+ ")";
	}
	if (event.target.id === ('color2')){
		body.style.background = "linear-gradient(to right," 
		+ color1.value
		+ "," 
		+ event.target.value
		+ ")";
		}
	}
