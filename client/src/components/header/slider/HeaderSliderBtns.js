import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useProductsContext } from "../../../contexts/products_context";

const HeaderSliderBtns = () => {
	const { nextHeaderSlide, prevHeaderSlide } = useProductsContext();

	return (
		<>
			<AiOutlineLeft
				className='header-slider-btn prev'
				onClick={prevHeaderSlide}
			/>
			<AiOutlineRight
				className='header-slider-btn next'
				onClick={nextHeaderSlide}
			/>
		</>
	);
};

export default HeaderSliderBtns;
