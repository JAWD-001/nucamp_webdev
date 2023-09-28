const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const feedbackDiv = document.getElementById('feedback');
const questionBtn = document.querySelector('#questionBtn');
const answerBtn = document.querySelector('#answerBtn');
let currentQuestion = null;

function getTriviaQuestion(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const index = Math.floor(Math.random()* questions.length);
			const question = questions[index];
			if (index > questions.length){
				reject('An error occured while fetching the trivia question');
			} else {
			resolve(question);
			}
		}, 1000);
	})
}

function displayQuestion(triviaQuestion){
	questionDiv.textContent = triviaQuestion.question;
	answerDiv.value = "";
	feedbackDiv.textContent = "";
}


questionBtn.addEventListener('click', () => {
	getTriviaQuestion().then((question) => {
		currentQuestion = question;
		displayQuestion(question);
	})
	.cath((error)=> {
		console.log(error);
	})
})

answerBtn.addEventListener('click', () => {
	let feedbackMessage;
	const userAnswer = answerDiv.value.trim().toLowerCase();
	if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()){
		feedbackDiv.style.color = 'green';
		feedbackMessage = 'Answer is correct!';
	} else {
		feedbackDiv.style.color = 'red';
		feedbackMessage = 'Answer is NOT correct!';
	}
	feedbackDiv.textContent = feedbackMessage;
})