import './categories.styles.scss';
import CategoryDirectory from './components/category-directory/category-directory.component';


function App() {
  const categories = [
		{
		  "id": 1,
		  "title": "hats",
		  "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
		  "subtitle": 'Shop Now'
		},
		{
		  "id": 2,
		  "title": "jackets",
		  "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
		  "subtitle": 'Shop Now'
		},
		{
		  "id": 3,
		  "title": "sneakers",
		  "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
		  "subtitle": 'Shop Now'
		},
		{
		  "id": 4,
		  "title": "womens",
		  "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
		  "subtitle": 'Shop Now'
		},
		{
		  "id": 5,
		  "title": "mens",
		  "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
		}
	  ]

  return (
    <CategoryDirectory categories={categories}/>
  )
  }

export default App;