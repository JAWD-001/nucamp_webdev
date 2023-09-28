function firstFunction (){
	setTimeout(() => {
		console.log(1);
	}, 500);
}
//this function is technically a async function because of setTimeout
//the setTimeout makes the console.log(1) wait for 50 m/s
//before logging, while the second function is called and logs right away


function SecondFunction() {
	console.log(2);
}

firstFunction();
SecondFunction();

function syncFunction (){
	console.log('Start of sync function:');
	for (let i = 0; i < 5; i++){
		console.log('sync', i);
	}
	console.log('Sync function over!')
}

function asyncFunction(){
	console.log('Start of async function:')
	for (let i = 0; i < 5; i++){
		setTimeout(() => console.log('Async', i), 1000 *i);
	} 
	console.log('End of async function!');
}

syncFunction();
asyncFunction();