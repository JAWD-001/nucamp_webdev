//make a new Promise

//can resolve by calling the resolve executor
myPromise = new Promise((resolve, reject) => {
	resolve('operation successful');
});

//can reject by calling the resolve executor
myPromise = new Promise((resolve, reject) => {
	reject('operation successful');
});