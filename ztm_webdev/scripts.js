let allP = document.getElementsByTagName("p");
//gets all p objects in the document//
let elementID = document.getElementById("first");
//gets only the sinlge id element, remember IDs are unique//
let elementAllClass = document.getElementsByClassName("second");
//gets all elements with the second class name
let elementQuery = document.querySelector('li')
//will select only the first item that it finds
let elementQueryAll = document.querySelectorAll('li,h1')
// will select all of the li items and also the h1 element

let itemInput = document.getElementById('item-input');

let button = document.getElementById('enter');

let list = document.querySelector('ul')

button.addEventListener('click', function () {
	if (itemInput.value.length > 0) {
		newLi = document.createElement('li');
		newLi.appendChild(document.createTextNode(itemInput.value));
		list.appendChild(newLi);
		itemInput.value = '';
	}
} )

button.addEventListener('mouseenter', function () {
	console.log('MOUSE!')
} )

button.addEventListener('mouseleave', function () {
	console.log('MOUSE GONE!')
})