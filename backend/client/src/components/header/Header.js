import Navigation from "../navigation/Navigation";
import { Link } from "react-scroll";
import HeaderSliderController from "./slider/HeaderSliderController";
import HeaderSlider from "./slider/HeaderSlider";

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header-container'>
					<Navigation />
					<div className='header-content'>
						{/* text box */}
						<div className='header-text-box'>
							<div className='header-box'>
								<h1 className='primary-heading'>Handcrafted bagpacks</h1>
								<h4 className='lead'>
									Custom bagpacks of natural leather and canvas
								</h4>
								<div className='header-btn-container'>
									<button className='btn btn-primary header-btn'>
										Add to cart
									</button>
									<Link
										className='btn btn-secondary header-btn'
										to='contact'
										spy={true}
										smooth={true}
										delay={500}
										duration={1500}
									>
										Leave a message
									</Link>
								</div>
							</div>
						</div>
						{/* slider */}
						<div className="header-slides-box">
							<HeaderSlider />
						</div>
						{/* slider controllers */}
						<HeaderSliderController />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
