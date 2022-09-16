import { useCallback, useEffect, useRef, useState } from "react";
import videoList from "../../utils/videoList";
import { BiPlay, BiPause } from "react-icons/bi";
import CurrentVideo from "./CurrentVideo";
import CurrentDummyVideo from "./CurrentDummyVideo";

const AboutVideoDisp = ({ currentIndex, videoPlaying, setVideoPlaying }) => {
	const checkVideoEnded = () => {
		setVideoPlaying(false);
	};

	const playVideo = () => {
		const videoContainer = document.querySelector(
			".about-video-disp-act.current"
		);
		const video = videoContainer.firstElementChild;
		if (!video) {
			return;
		}
		video.addEventListener("ended", checkVideoEnded);

		if (videoList[currentIndex].type === "video") {
			video.play();
			video.muted = true;
			setVideoPlaying(true);
			video.classList.add("playing");
		}

		return () => {
			video.removeEventListener("ended", checkVideoEnded);
		};
	};

	const pauseVideo = () => {
		const videoContainer = document.querySelector(
			".about-video-disp-act.current"
		);
		const video = videoContainer.firstElementChild;

		if (video === null) {
			return;
		}
		video.pause();
		setVideoPlaying(false);
		video.classList.remove("playing");
	};

	return (
		<div className='about-video-disp'>
			{videoList.map((video, i) => {
				if (video.type === "image") {
					return (
						<div
							className={
								currentIndex === i
									? "about-video-disp-act current"
									: "about-video-disp-act"
							}
							key={i}
						>
							<CurrentDummyVideo video={video} />
						</div>
					);
				}
				return (
					<div
						className={
							currentIndex === i
								? "about-video-disp-act current"
								: "about-video-disp-act"
						}
						key={i}
					>
						<CurrentVideo video={video} />
					</div>
				);
			})}

			<div className='about-active-video-ctrl'>
				{!videoPlaying && (
					<BiPlay
						className='about-active-video-play about-active-ctrl-icon'
						onClick={playVideo}
					/>
				)}

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
