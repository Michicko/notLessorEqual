import { useProductsContext } from "../../../contexts/products_context";

const HeaderSlider = () => {
	const { featured_products, current_header_slide_index } =
		useProductsContext();

	return (
		<div className='header-slider'>
			<div className='header-slides-container'>
				<div className='header-slides'>
					{featured_products.map((product, i) => {
						const { slug, name, namePosition } = product;
						return (
							<div
								className={
									current_header_slide_index === i
										? `header-slide current ${namePosition}`
										: "header-slide"
								}
								key={i}
							>
								<img
									src={require(`../../../assets/images/${slug}.png`).default}
									alt=''
									className='header-slider-img'
								/>
                <h2 className='header-slider-name'>
                  {name}
                </h2>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HeaderSlider;
