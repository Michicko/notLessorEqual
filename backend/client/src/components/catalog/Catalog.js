import { useEffect, useRef, useState } from "react";
import { useProductsContext } from "../../contexts/products_context";
import CatalogProductDisplay from "./CatalogProductDisplay";
import CatalogSlider from "./CatalogSlider";
import CatalogSliderBtns from "./CatalogSliderBtns";

const Catalog = () => {
	const slidesBox = useRef(null);
	const {
		current_catalog_slide_product,
		current_catalog_slide_index,
		nextCatalogSlide,
		prevCatalogSlide,
	} = useProductsContext();
	const [slidesPosition, setSlidesPosition] = useState(0);

	const translateItem = (position) => {
		return (slidesBox.current.firstElementChild.style.transform = `translateX(${position}px)`);
	}

	const slideItem = (pos) => {
		const slides = document.querySelectorAll(".slide");
		const currentSlide = document.querySelector(".slide.current");
		const slideWidth = currentSlide.getBoundingClientRect().width + 20;
		const funcDirection = pos === 'next' ? (currPos => currPos - slideWidth) : (currPos => currPos + slideWidth)
		const translateDetails =
			pos === "next"
				? slidesPosition - slideWidth
				: slidesPosition + slideWidth;
		

		if (pos === 'next') {
			if (current_catalog_slide_index >= slides.length - 1){
				return;
			} else {
				setSlidesPosition(funcDirection);
				translateItem(translateDetails);
			pos === "next" ? nextCatalogSlide() : prevCatalogSlide();
			}
				
		}

		if (pos === 'prev') {
			if (current_catalog_slide_index <= 0) {
				return;
			} else {
				setSlidesPosition(funcDirection);
				translateItem(translateDetails);
				pos === "next" ? nextCatalogSlide() : prevCatalogSlide();
			}
		}
	};

	const nextSlide = () => {
		slideItem('next');
	};

	const prevSlide = () => {
			slideItem('prev');
	};

	return (
		<section className='catalog-section' id='catalog'>
			<div className='container'>
				<div className='calalog-content'>
					<h2 className='secondary-heading pg-heading'>Catalog</h2>
					<div className='carousel'>
						<CatalogSlider slidesBox={slidesBox} />
						<CatalogSliderBtns nextSlide={nextSlide} prevSlide={prevSlide} />
					</div>

					{/* selected product display */}
					<div className='product-display-box'>
						{current_catalog_slide_product && <CatalogProductDisplay />}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Catalog;
