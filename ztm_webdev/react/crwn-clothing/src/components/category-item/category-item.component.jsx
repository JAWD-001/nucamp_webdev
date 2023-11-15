import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<div className='category-container' style={{
			backgroundImage: `url(${imageUrl})`
		  }}>
			<div className='category-container-bkg-img'/>
			<div className='category-container-body'>
			  <h2>{title}</h2>
			  <p>Shop Now</p>
			</div>
		 </div>
	)

}

export default CategoryItem;