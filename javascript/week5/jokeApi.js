fetch('https://official-joke-api.appspot.com/random_joke')
	.then(response => response.json())
	.then(joke => console.log(`Here is a joke: ${joke.setup}\n${joke.punchline}`))
	.catch(error => console.error('There was an error'));

```
Line 1: The fetch function initiates an HTTP GET request to the URL 'https://official-joke-api.appspot.com/random_joke'. This URL is the endpoint for the "Official Joke API," which provides random jokes in JSON format.
Line 2: Once the request is made, the promise returned by fetch resolves with a Response object that represents the response to the request. This line takes the Response object and reads the body of the response as JSON. It returns a promise that resolves with the resulting JSON object. In this case, the JSON object would represent a random joke with properties like setup and punchline.
Line 3: This line takes the JSON object from the previous step and logs the joke to the console. The joke object has two properties (setup and punchline), which are combined into a string using a template literal, and the formatted joke is printed to the console.
Line 4: This line catches any errors that may occur during the fetch operation or the processing of the response. If there's a problem at any step, it will print an error message to the console, along with the details of the error.
```

async function fetchData() {
	try{
		let response = await fetch('https://official-joke-api.appspot.com/random_joke');
		let data = await response.json();
		console.log(data);
	} catch{
		console.error('An error occured', error);
	}
}

fetchData()

```
The async function allows the use of await to pause execution until the Promise resolves.
try/catch provides error handling in a more familiar synchronous style.
```

//when using Fetch, the response object has various methods to handle the data
// response.json() -- returns and handles JSON data
// response.text() -- returns and handles plain text data

//handling text data
fetch('https://api.example.com/text')
	.then(response => response.text())
	.then(text => console.log(text));

// to handle network level failures use a catch call or try/catch

fetch('https://api.example.com/text')
	.catch(error => console.error('Network error', error));