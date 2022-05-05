import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiPlay, BiPause } from "react-icons/bi";

const AboutVideos = ({ videoList, currentIndex, setCurrentIndex }) => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
				},
			},
			{
				breakpoint: 1001,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
				},
			},
			{
				breakpoint: 876,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
				},
			},
			{
				breakpoint: 698,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className='about-videos'>
			<div className='about-slider-box'>
				<Slider {...settings}>
					{videoList.map((video, i) => {
						if (video.type === "image") {
							return (
								<div
									className={
										i === currentIndex
											? "about-video-box current"
											: "about-video-box"
									}
									key={i}
								>
									<figure className='about-dummy-vid'>
										<img
											src={
												require(`../../assets/images/${video.name}.jpg`).default
											}
											alt=''
											className='about-dummy-img'
										/>
									</figure>
									<div className='about-video-ctrl'>
										<BiPlay className='about-ctrl-icon' />
									</div>
									<h4 className='about-video-caption'>{video.name}</h4>
								</div>
							);
						}

						return (
							<div
								className={
									i === currentIndex
										? "about-video-box current"
										: "about-video-box"
								}
								key={i}
							>
								<video className='about-video'>
									<source
										src={
											require(`../../assets/videos/${video.name}.mp4`).default
										}
										type='video/mp4'
									></source>
									Sorry, your browser doesn't support embedded videos.
								</video>
								<div className='about-video-ctrl'>
									<BiPlay className='about-ctrl-icon' />
								</div>
								<h4 className='about-video-caption'>{video.name}</h4>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default AboutVideos;
