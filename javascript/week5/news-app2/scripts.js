const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews(){
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		displayNews(data.articles);
	} catch(error){
		console.error('There was an error!', error);
	}
}

function displayNews(articles){
	const newsDiv = document.querySelector('#news');

	for (const article of articles){
		const articleDiv = document.createElement('div');
		articleDiv.classList.add('card');


		//create img element
		const img = document.createElement('img');
		img.src = article.urlToImage;
		img.alt = article.title;
		img.classList.add('card-img-top');
		articleDiv.appendChild(img);

		const bodyDiv = document.createElement('div');
		bodyDiv.classList.add('card-body');
		articleDiv.appendChild(bodyDiv);



		const title = document.createElement('h5');
		title.textContent = article.title;
		title.classList.add('card-title');
		bodyDiv.appendChild(title);

		const description = document.createElement('p');
		description.textContent = article.description;
		description.classList.add('card-text');
		bodyDiv.appendChild(description);

		const link = document.createElement('a');
		link.textContent = 'Article';
		link.classList.add('btn');
		link.classList.add('btn-primary');
		link.href = 'article.url'
		bodyDiv.appendChild(link);

		newsDiv.appendChild(articleDiv);
	}
}

fetchNews()