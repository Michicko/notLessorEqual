import ProductSlide from "./ProductSlide";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

const ProductsSlider = ({
	slides,
	current,
	setCurrent,
	openDisplayBox,
	is_display_box_opened,
}) => {
	const handlePreviousClick = () => {
		let previous = current - 1;

		if (previous < 0) {
			previous = 0;
		}
		setCurrent(previous);
	};

	const handleNextClick = () => {
		let next = current + 1;

		if (next === slides.length) {
			next = slides.length - 1;
		}
		setCurrent(next);
	};

	const handleSlideClick = (index) => {
		if (current !== index) {
			setCurrent(index);
		}
	};

	const wrapperTransform = {
		transform: `translateX(-${current * (100 / slides.length)}%)`,
	};

	const productList =
		slides.length > 0 ? (
			slides.map((slide, i) => {
				return (
					<ProductSlide key={i} index={i} slide={slide} current={current} />
				);
			})
		) : (
			<p className='nothing'>No products avaiable at the moment.</p>
		);

	return (
		<div className='pd-slide__container'>
			<div className='pd-slider'>
				<ul className='pd-slider__wrapper' style={wrapperTransform}>
					{productList}
				</ul>
				<div className='pd-slide__btn-shadow'></div>
				<button
					className={
						is_display_box_opened ? "pd-slide__btn active" : "pd-slide__btn"
					}
					type='button'
					onClick={openDisplayBox}
				>
					<FiChevronDown className='pd-slide__btn-icon' />
				</button>
			</div>
			<div className='pd-slider__ctrls'>
				<BsChevronLeft
					className='pd-slider__arrow prev'
					onClick={handlePreviousClick}
				/>
				<BsChevronRight
					className='pd-slider__arrow next'
					onClick={handleNextClick}
				/>
			</div>
		</div>
	);
};
 
export default ProductsSlider;