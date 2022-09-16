const CurrentVideo = ({ video }) => {

	return (
		<video className='about-active-video'>
			<source
				src={require(`../../assets/videos/${video.name}.mp4`).default}
				type='video/mp4'
			></source>
			<source
				src={require(`../../assets/videos/${video.name}.webm`).default}
				type='video/webm'
			></source>
			Sorry, your browser doesn't support embedded videos.
		</video>
	);
};
 
export default CurrentVideo;