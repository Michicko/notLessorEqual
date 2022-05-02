import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const CatalogSliderBtns = () => {
  return (
		<div className='slider-btns'>
			<BsChevronLeft className='slider-arrow prev' />
			<BsChevronRight className='slider-arrow next' />
		</div>
	);
}
 
export default CatalogSliderBtns;