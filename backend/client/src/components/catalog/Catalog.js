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
						<div className="product-display-bg"></div>
						<div className='product-display'>
							<div className='product-display-img-box'>
								<div className='disp-slides'>
									<div className='disp-slide'>
										<img
											src={
												require("../../assets/images/095-2020-1.jpg").default
											}
											alt=''
											className='disp-img'
										/>
									</div>
									<div className='disp-slide'>
										<img
											src={
												require("../../assets/images/095-2020-1.jpg").default
											}
											alt=''
											className='disp-img'
										/>
									</div>
									<div className='disp-slide'>
										<img
											src={
												require("../../assets/images/095-2020-1.jpg").default
											}
											alt=''
											className='disp-img'
										/>
									</div>
								</div>
							</div>
							<div className='product-display-text-box'>
								<p className='disp-text'>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Dolores ut officia voluptates asperiores veniam enim quod hic
									aut, nemo at id quisquam! Tempore dolores ipsum veritatis
									corporis mollitia. Excepturi, voluptatum.
								</p>
								<p className='disp-info'>
									<span className='info-type'>Material: </span>
									<span className='info-text'>canvas, leather</span>
								</p>
								<p className='disp-info'>
									<span className='info-type'>Size: </span>
									<span className='info-text'>56X50X23cm</span>
								</p>
								<div className='disp-c'>
									<h5 className='disp-price'>$55</h5>
									<button className='btn btn-primary cta-btn'>
										Add to cart
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Catalog;
