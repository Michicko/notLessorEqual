import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useProductsContext } from "../../contexts/products_context";

const CatalogSliderBtns = ({nextSlide, prevSlide}) => {


	

  return (
		<div className='slider-btns'>
			<BsChevronLeft className='slider-arrow prev' onClick={prevSlide} />
			<BsChevronRight
				className='slider-arrow next'
				onClick={nextSlide}
			/>
		</div>
	);
}
 
export default CatalogSliderBtns;