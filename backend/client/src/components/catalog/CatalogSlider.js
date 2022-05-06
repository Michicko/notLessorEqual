import { FiChevronDown } from "react-icons/fi";
import { useProductsContext } from "../../contexts/products_context";

const CatalogSlider = ({
	slidesBox,
	is_display_box_opened,
	openDisplayBox,
}) => {
	const { products, current_catalog_slide_index } = useProductsContext();

	return (
		<>
			<div className='catalog-slider' ref={slidesBox}>
				<div className='slides'>
					{products.map((product, i) => {
						const { name, images, description } = product;

						return (
							<div
								className={
									current_catalog_slide_index === i ? "slide current" : "slide"
								}
								key={i}
							>
								<img src={images[0].url} alt={name} className='slide-img' />
								<h4 className='slide-name'>{name}</h4>
								<p className='slide-text'>{description}</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className='catalog-slider-dummy'>
				<div className='slide-dummy'>
					<div className='slide-btn-shadow'></div>
					<button
						className={is_display_box_opened ? "slide-btn active" : "slide-btn"}
						type='button'
						onClick={openDisplayBox}
					>
						<FiChevronDown className='slider-btn-icon' />
					</button>
				</div>
			</div>
		</>
	);
};

export default CatalogSlider;
