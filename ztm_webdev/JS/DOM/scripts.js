let allP = document.getElementsByTagName("p");
//gets all p objects in the document//
let elementID = document.getElementById("first");
//gets only the sinlge id element, remember IDs are unique//
let elementAllClass = document.getElementsByClassName("second");
//gets all elements with the second class name
let elementQuery = document.querySelector("li");
//will select only the first item that it finds
let elementQueryAll = document.querySelectorAll("li,h1");
// will select all of the li items and also the h1 element

let itemInput = document.getElementById("item-input");
let button = document.getElementById("enter");
let list = document.querySelector("ul");
let item = document.querySelector('li');
let deleteBtns = document.querySelectorAll(".delete-btn");

/*
button.addEventListener("click", function () {
  if (itemInput.value.length > 0) {
    let newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newLi);
    itemInput.value = "";
  }
});

itemInput.addEventListener("keydown", function (event) {
  if (itemInput.value.length > 0 && event.key === "Enter") {
    let newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newLi);
    itemInput.value = "";
  }
});
*/

//REFACTORED FROM ABOVE

/*
function inputLength (){
  return itemInput.value.length();
}

function createLiElement (){
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(itemInput.value));
  list.appendChild(newLi);
  itemInput.value = "";
}

button.addEventListener("click", function () {
  if (inputLength() > 0) {
    createLiElement();
  }
});


itemInput.addEventListener("keydown", function (event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createLiElement();
  }
});
*/

//REFACTORED YET AGAIN...

function inputLength (){
  return itemInput.value.length;
}


function createLiElement (){
  let newLi = document.createElement("li");
  newLi.classList.add('done');
  newLi.appendChild(document.createTextNode(itemInput.value));
  list.appendChild(newLi);
  itemInput.value = "";
  createBtnElement(newLi);
}


function createBtnElement(newLi){
  let newBtn = document.createElement('button');
  newBtn.classList.add('delete-btn');
  newBtn.style.marginLeft = '10px';
  newBtn.appendChild(document.createTextNode('Delete Item'));
  newLi.appendChild(newBtn);
}


function addLiAfterClick(){
  if (inputLength() > 0) {
    createLiElement();
  }
}


function addLiAfterEnter(event){
  if (inputLength() > 0 && event.key === "Enter"){
    createLiElement();
  }
}


function liItemStatus(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.remove();
  } 
  if (event.target.tagName === 'LI'){
  event.target.classList.toggle('done')
  }
}

itemInput.addEventListener('keypress', addLiAfterEnter);

button.addEventListener("click", addLiAfterClick);

list.addEventListener('click', liItemStatus);

