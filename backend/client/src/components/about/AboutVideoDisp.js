import { useState } from "react";
import videoList from "../../utils/videoList";
import { BiPlay, BiPause } from "react-icons/bi";

const AboutVideoDisp = ({ currentVideo }) => {
	const [videoPlaying, setVideoPlaying] = useState(false);

	const checkVideoEnded = () => {
		setVideoPlaying(false);
	};

	const playVideo = () => {
		const video = document.querySelector(".about-active-video");
		if (video == null) {
			return;
		}
		video.addEventListener("ended", checkVideoEnded);

		if (!videoPlaying) {
			video.play();
			video.muted = true;
			setVideoPlaying(true);
		}

		return () => {
			video.removeEventListener("ended", checkVideoEnded);
		};
	};

	const pauseVideo = () => {
		const video = document.querySelector(".about-active-video");
		
		if (videoPlaying) {
			video.pause();
			setVideoPlaying(false);
		}
	}

	return (
		<div className='about-video-disp'>
			{/* if video */}
			{currentVideo.type === "video" ? (
				<video className='about-active-video'>
					<source
						src={
							require(`../../assets/videos/${currentVideo.name}.mp4`).default
						}
						type='video/mp4'
					></source>
					<source
						src={
							require(`../../assets/videos/${currentVideo.name}.webm`).default
						}
						type='video/webm'
					></source>
					Sorry, your browser doesn't support embedded videos.
				</video>
			) : (
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
					<BiPlay
						className='about-active-video-play about-active-ctrl-icon'
						onClick={playVideo}
					/>
				)}
				{/* if image */}

				{videoPlaying && (
					<BiPause
						className='about-active-video-pause about-active-ctrl-icon'
						onClick={pauseVideo}
					/>
				)}
			</div>
		</div>
	);
};

export default AboutVideoDisp;
