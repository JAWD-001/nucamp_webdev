//Parent elements, hold other elements. Usually think of body, by can also be tables
//Child elements are held within the parent elemtents, can have siblings within the parent element
//text elements and void elements can not have a child element
<body>
	Parent element
	<div>child to body, parent to others
	<h1>Child Element</h1>
	<table> child
		<tr> child to table
			<td>child to table row</td>
			<br>child to tr</br>
		</tr>
	</table>
	</div>
</body>

//accessing dom tree can be used by an entry point
//body element can be simply accessed like such
let node = document.body;

//when accessing entry points, we can't call an entrypoint to an element that has more than one
//of the same element, for example divs
//can access all nodes through the body, allows us to transverse the nodes/dom 
.parentNode = parent node
.firstChild = firstChild of parent node
.lastChild = last child of node
.nextSibling = very next sibling node 
.previousSibling = very next sibling node
.childNodes[...] will give an iterable called a NodeList, containing all child nodes in the list

//can change the value of node to a child node
node = node.childNodes[1];
//changes the node to a child node of the original node, which is the body element in the html
//therefore the body element would become the parent node, it could have siblings, and any elements that come after
//the new node would be children

//locating nodes can be done by transversing the DOM, by tag name, id, query selector, 
//transversing the DOM is the worst way, anytime a page changes, so does the DOM
//can access with element type, not best if accessing a single element
//id accessing element directly due to the id being uniqye
//query selectors are most preferred cause you can provide a CSS selector, more flexible
//if looking for multiple elements that match the selector just use querySelectorAll()
//can change style of html elements by calling .style right after query, then the styles after