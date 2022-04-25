import { useState } from "react";
import videoList from "../../utils/videoList";
import { BiPlay, BiPause } from "react-icons/bi";

const AboutVideoDisp = ({ currentVideo }) => {
	const [videoPlaying, setVideoPlaying] = useState(false);

	return (
		<div className='about-video-disp'>
			{/* if video */}
			{currentVideo.type === "video" && (
				<video className='about-active-video'>
					<source
						src={
							require(`../../assets/videos/${currentVideo.name}.webm`).default
						}
						type='video/webm'
					></source>
					<source
						src={
							require(`../../assets/videos/${currentVideo.name}.mp4`).default
						}
						type='video/mp4'
					></source>
					Sorry, your browser doesn't support embedded videos.
				</video>
			)}
			{/* if image */}
			{currentVideo.type === "image" && (
				<figure className='about-active-dummy-vid'>
					<img
						src={
							require(`../../assets/images/${currentVideo.name}.jpg`).default
						}
						alt=''
						className='about-active-dummy-img'
					/>
				</figure>
			)}

			<div className='about-active-video-ctrl'>
				{!videoPlaying && (
					<BiPlay className='about-active-video-play about-active-ctrl-icon' />
				)}
				{videoPlaying && (
					<BiPause className='about-active-video-pause about-active-ctrl-icon' />
				)}
			</div>
		</div>
	);
};

export default AboutVideoDisp;
