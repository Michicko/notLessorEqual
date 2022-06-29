

const ProductSlide = ({ current, slide, index }) => {
	const { name, images, description } = slide;
	let classNames = "pd-slide";

	if (current === index) classNames += " pd-slide--current";
	else if (current - 1 === index) classNames += " pd-slide--previous";
	else if (current + 1 === index) classNames += " pd-slide--next";

	return (
		<li className={classNames}>
			<img
				src={images[0].url}
				alt={name}
				className='pd-slide__img'
			/>
			<h4 className='pd-slide__name'>{name}</h4>
			<p className='pd-slide__text'>{description.substring(1, 115)}</p>
		</li>
	);
};

export default ProductSlide;
