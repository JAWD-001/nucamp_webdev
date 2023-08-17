//createElement()
//allows for a new HTML element node to be made in javascript
const newEl = document.createElement("hr");

//createTextNode()
//can create a new text node with it, createCommentNode() will create a comment node
const newText = document.createTextNode("your text goes here");

//once you create a node it doesn't attach to the DOM, must specifically assign it to the DOM

//insertBefore() is a node method that allows you to create a node on an already existing node, takes two arguements. The element being created and the second is the node inside the parent node that you want to insert before (Can be any child element that you want it to be created before)
//use an existing node in the DOM to act as the parent node to insert
parentNode.insertBefore(newEl, parentNode.lastChild);
//this creates the hr element in the parent node before the last child element

//appendChild() can add a node to an existing node in the DOM, this appends the new node as a child of the parent.
parentNode.appendChild(newText);
//this method appends the newText element to the Parent Node as the last child

//check the create-and-add-nodes.html for example
