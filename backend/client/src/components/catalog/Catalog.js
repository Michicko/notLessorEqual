import { useEffect, useRef, useState } from "react";
import { useProductsContext } from "../../contexts/products_context";
import ProductsSlider from "../sliders/ProductsSlider";
import ProductDisplay from "../sliders/ProductDisplay";

const Catalog = () => {
	const {
		products
	} = useProductsContext();
	const dispBox = useRef(null);
	const [current, setCurrent] = useState(1);
	const [product, setProduct] = useState({});
	const [is_display_box_opened, setIs_display_box_opened] = useState(false);

	const openDisplayBox = () => {
		setIs_display_box_opened(true);
	};

	useEffect(() => {
		setProduct(products[current]);
	}, [products, current])

	return (
		<section className='catalog-section' id='catalog'>
			<div className='container'>
				<div className='calalog-content'>
					<h2 className='secondary-heading pg-heading'>Catalog</h2>
					<div className='carousel'>
						<div className='carousel-inner'>
							<ProductsSlider
								slides={products}
								current={current}
								setCurrent={setCurrent}
								openDisplayBox={openDisplayBox}
								is_display_box_opened={is_display_box_opened}
							/>
						</div>
					</div>

					{/* selected product display */}
					{product && (
						<ProductDisplay
							product={product}
							dispBox={dispBox}
							is_display_box_opened={is_display_box_opened}
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default Catalog;
