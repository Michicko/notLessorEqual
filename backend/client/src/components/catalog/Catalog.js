import CatalogProductDisplay from "./CatalogProductDisplay";
import CatalogSlider from "./CatalogSlider";
import CatalogSliderBtns from "./CatalogSliderBtns";

const Catalog = () => {
	return (
		<section className='catalog-section' id='catalog'>
			<div className='container'>
				<div className='calalog-content'>
					<h2 className='secondary-heading pg-heading'>Catalog</h2>
					<div className='carousel'>
						<CatalogSlider />
						<CatalogSliderBtns />
					</div>

					{/* selected product display */}
					<div className='product-display-box'>
						<CatalogProductDisplay />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Catalog;
