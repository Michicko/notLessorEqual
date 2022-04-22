import { useEffect, useRef } from "react";
import { useProductsContext } from "../../../contexts/products_context";
import HeaderSliderBtns from "./HeaderSliderBtns";

const HeaderSliderController = () => {
	const { featured_products, current_header_slide_index, selectHeaderSlide } =
		useProductsContext();
	const signalsBox = useRef(null);

	useEffect(() => {
		const slideIndicator = () => {
			if (featured_products.length > 0 || current_header_slide_index) {
				const signals = document.querySelectorAll(".header-signal");
				const indicator = document.querySelector(".header-signal-indi");
				const currentIndex = current_header_slide_index;
				const currentSignal = signals[currentIndex];

				// get the position of the selected signal
				const currentSignalPosition =
					currentSignal.getBoundingClientRect().left -
					signalsBox.current.getBoundingClientRect().left -
					6.5;

				// slide indicator to the current selected signal
				indicator.style.transform = `translateX(${currentSignalPosition}px)`;
			}
		};

		slideIndicator();
	}, [current_header_slide_index, featured_products]);

	return (
		<div className='header-slider-controls'>
			<div className='header-slider-signals' ref={signalsBox}>
				{featured_products.map((prod, i) => {
					return (
						<button
							type='button'
							className='header-signal'
							key={i}
							onClick={() => selectHeaderSlide(i)}
						></button>
					);
				})}
				<div className='header-signal-indi'></div>
			</div>
			<div className='header-slider-btns'>
				<HeaderSliderBtns />
			</div>
		</div>
	);
};

export default HeaderSliderController;
