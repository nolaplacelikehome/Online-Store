import '../css/ProductCard.css';

export default function ProductCard() {
	return (
		<div className='product-container'>
			<div className="product-card">
				<div className="product-img">Product image</div>
				<div className="product-description-container">
					<div className="product-name">Name</div>
					<div className="product-price">$Price</div>
				</div>
			</div>
		</div>
	);
}