import { FiChevronDown } from "react-icons/fi";

const CatalogSlider = () => {
	return (
		<>
			<div className='catalog-slider'>
				<div className='slides'>
					<div className='slide'>
						<img src={require('../../assets/images/095-2020-1.jpg').default} alt='095-2020' className='slide-img' />
						<h4 className='slide-name'>095-2020</h4>
						<p className='slide-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
							non ut error ratione suscipit ipsa. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
						</p>
					</div>
					<div className='slide current'>
						<img src={require('../../assets/images/095-2020-1.jpg').default} alt='095-2020' className='slide-img' />
						<h4 className='slide-name'>095-2020</h4>
						<p className='slide-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
							non ut error ratione suscipit ipsa. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
						</p>
					</div>
					<div className='slide'>
						<img src={require('../../assets/images/095-2020-1.jpg').default} alt='095-2020' className='slide-img' />
						<h4 className='slide-name'>095-2020</h4>
						<p className='slide-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
							non ut error ratione suscipit ipsa. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
						</p>
					</div>
					<div className='slide'>
						<img src={require('../../assets/images/095-2020-1.jpg').default} alt='095-2020' className='slide-img' />
						<h4 className='slide-name'>095-2020</h4>
						<p className='slide-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
							non ut error ratione suscipit ipsa. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
						</p>
					</div>
					<div className='slide'>
						<img src={require('../../assets/images/095-2020-1.jpg').default} alt='095-2020' className='slide-img' />
						<h4 className='slide-name'>095-2020</h4>
						<p className='slide-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
							non ut error ratione suscipit ipsa. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
						</p>
					</div>
					<div className='slide'>
						<img src={require('../../assets/images/095-2020-1.jpg').default} alt='095-2020' className='slide-img' />
						<h4 className='slide-name'>095-2020</h4>
						<p className='slide-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
							non ut error ratione suscipit ipsa. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
						</p>
					</div>
				
				</div>
			</div>
			<div className='catalog-slider-dummy'>
				<div className='slide-dummy'>
					<div className='slide-btn-shadow'></div>
					<button className='slide-btn' type='button'>
						<FiChevronDown className='slider-btn-icon' />
					</button>
				</div>
			</div>
		</>
	);
};

export default CatalogSlider;
