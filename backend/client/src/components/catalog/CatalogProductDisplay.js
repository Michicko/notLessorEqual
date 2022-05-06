import { useEffect, useState } from "react";
import { useCartContext } from "../../contexts/cart_context";
import { useProductsContext } from "../../contexts/products_context";
import removeQuotes from "../../utils/removeQuotes";

const CatalogProductDisplay = () => {
	const { current_catalog_slide_product } = useProductsContext();
	const { name, images, description, materials, size, price } =
		current_catalog_slide_product;
  const { add_bagpack_to_cart } = useCartContext();
  
	return (
		<>
			<div className='product-display-bg'></div>
			<div className='product-display'>
				<div className='product-display-img-box'>
					{images && (
						<div className='disp-slides'>
							<div className='disp-slide'>
								<img src={images[0].url} alt={name} className='disp-img' />
							</div>
							<div className='disp-slide'>
								<img src={images[1].url} alt={name} className='disp-img' />
							</div>
							<div className='disp-slide'>
								<img src={images[2].url} alt={name} className='disp-img' />
							</div>
						</div>
					)}
				</div>
				<div className='product-display-text-box'>
					<p className='disp-text'>{description}</p>
					<p className='disp-info'>
						<span className='info-type'>Material: </span>
						<span className='info-text'>{materials && removeQuotes(materials)}</span>
					</p>
					<p className='disp-info'>
						<span className='info-type'>Size: </span>
						<span className='info-text'>{size && removeQuotes(size)}</span>
					</p>
					<div className='disp-c'>
						<h5 className='disp-price'>${price}</h5>
						<button
							className='btn btn-primary cta-btn'
							onClick={() =>
								add_bagpack_to_cart(current_catalog_slide_product, 1)
							}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CatalogProductDisplay;
