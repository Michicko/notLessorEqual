const videoDisp = useRef(null);
const videos = videoList.filter((video) => video.type === "video");
const images = videoList.filter((image) => {
	return image.type === "image";
});

console.log(videos);
console.log(images);

const createVideoProperties = useCallback(
	(type) => {
		let currentVideo = videos.find((video) => video.id === currentIndex);
		const source = document.createElement("source");
		source.src =
			require(`../../assets/videos/${currentVideo.name}.${type}`).default;
		source.setAttribute("type", `video/${type}`);
		return source;
	},
	[currentIndex, videos]
);

const createNewVideoElement = useCallback(() => {
	console.log("Created new video");
	const video = document.createElement("video");
	video.classList = "about-active-video";
	const video_source_mp4 = createVideoProperties("mp4");
	const video_source_webm = createVideoProperties("webm");
	const text = document.createTextNode(
		"Sorry, your browser doesn't support embedded videos."
	);

	video.appendChild(video_source_mp4);
	video.appendChild(video_source_webm);
	video.appendChild(text);

	// Build a reference to the existing node to be replaced
	const old_active_video = document.querySelector(".about-active-video");

	const parentDiv = old_active_video.parentNode;
	parentDiv.replaceChild(video, old_active_video);
	console.log(old_active_video);
}, [createVideoProperties]);

useEffect(() => {
	const checkVideoType = () => {
		if (videoList[currentIndex].type === "image") {
			return;
		}
		console.log(videoDisp.current);
		createNewVideoElement();

		// if (videoList[currentIndex].type === "video") {
		// 	console.log("hay");
		// 	createNewVideoElement();
		// } else {
		// 	return;
		// }
	};
	// checkVideoType();
}, [currentIndex, createNewVideoElement]);
