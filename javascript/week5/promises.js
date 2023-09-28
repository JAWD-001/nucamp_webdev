//make a new Promise

//can resolve by calling the resolve executor
myPromise = new Promise((resolve, reject) => {
	resolve('operation successful');
});

//can reject by calling the resolve executor
myPromise = new Promise((resolve, reject) => {
	reject('operation successful');
});

let myPromise = new Promise((resolve, reject) => {
	resolve('Operation successful');
});

const successPromise = new Promise((resolve, reject) => {
	resolve('Operation successful!');
});
successPromise.then (message => console.log(message));

const failurePromise = new Promise((resolve, reject) => {
	reject('Operation failed!');
});

//Coin flip app with Promises for resolve and reject
const performCoinFlip = () => {
	const coinFlip = new Promise((resolve, reject) => {
	  const outcomes = ['heads', 'tails', 'edge'];
	  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  
	  if (outcome === "heads" || outcome === 'tails') {
		resolve(`${outcome}`)
	  } else {
		reject('Landed on the edge! Try again.')
	  }
	});
  
	// Do not modify this part, it will display the result of your Promise
	coinFlip.then((result) => {
	  document.getElementById('result').textContent = `The coin landed on ${result}!`;
	}).catch((error) => {
	  document.getElementById('result').textContent = error;
	});
  };
  
  document.getElementById('flipCoinButton').addEventListener('click', performCoinFlip);


  //promise to fetch data
 ``` const fetchData = new Promise((resolve, reject) => {
	setTimeout(() => {
		let success = true;
		if (success) {
			resolve('Data fetched successfully');
		}
		else {
			reject('Failed to fetch data')
		}
	}, 2000);
})
```
let isLoading = true;

function stopLoading(){
	isLoading = false;
	console.log('Stopped Loading');
}


const fetchData = new Promise((resolve, reject) => {
	setTimeout(() => {
		let success = Math.random() > 0.5;
		console.log(success);
		if (success){
			resolve('Data fetched successfully');
		} else {
			reject('Data not fetched')
		}
	}, 2000);
});

fetchData
	.then((data) => console.log(data))
	.catch((error) => console.log(error))
	.finally(() => stopLoading());

