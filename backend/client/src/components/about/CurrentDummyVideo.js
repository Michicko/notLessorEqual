const CurrentDummyVideo = ({ video }) => {

  return (
		<figure className='about-active-dummy-vid'>
			<img
				src={require(`../../assets/images/${video.name}.jpg`).default}
				alt=''
				className='about-active-dummy-img'
			/>
		</figure>
	);
}
 
export default CurrentDummyVideo;