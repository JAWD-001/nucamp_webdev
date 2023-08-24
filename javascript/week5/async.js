function firstFunction (){
	setTimeout(() => {
		console.log(1);
	}, 500);
}
//this function is technically a async function because of setTimeout

function SecondFunction() {
	console.log(2);
}

firstFunction();
SecondFunction();