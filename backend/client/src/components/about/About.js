import { useEffect, useState } from "react";
import AboutTextSection from "./AboutTextSection"
import AboutVideoDisp from "./AboutVideoDisp"
import videoList from "../../utils/videoList";
import AboutVideos from "./AboutVideos";

const About = () => {
  const [videos, setVideos] = useState(videoList);
  const [currentIndex, setCurrentIndex] = useState(0);
	const [currentVideo, setCurrentVideo] = useState(videos[currentIndex]);
	
	useEffect(() => {
		setCurrentVideo(videos[currentIndex]);
	}, [currentIndex, videos])
  
  return (
		<section className='about-section' id='about'>
			<div className='container'>
				<div className='about-content'>
					<h2 className='secondary-heading pg-heading'>About us</h2>
					{/* about text and about video display */}
					<div className='about-box'>
						<AboutTextSection />
						<AboutVideoDisp currentVideo={currentVideo} />
					</div>
					{/* video display */}
					<AboutVideos
						videoList={videoList}
						currentIndex={currentIndex}
						setCurrentIndex
						={setCurrentIndex}/>
				</div>
			</div>
		</section>
	);
}
 
export default About;