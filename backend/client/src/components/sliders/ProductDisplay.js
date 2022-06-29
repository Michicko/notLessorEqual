import { useEffect, useState } from "react";
import { useCartContext } from "../../contexts/cart_context";
import { useProductsContext } from "../../contexts/products_context";
import removeQuotes from "../../utils/removeQuotes";

const ProductDisplay = ({ product, dispBox, is_display_box_opened }) => {
	const { name, images, description, materials, size, price } = product;
	const { add_bagpack_to_cart } = useCartContext();
	const { isMobile } = useProductsContext();
	const [pressed, setPressed] = useState(false);
	const [currentX, setCurrentX] = useState(0);

	const handleGrab = (e) => {
    const displaySlides = dispBox.current.firstElementChild.firstElementChild;
		if (e.target && !pressed) {
      setPressed(true);
      const startx =
				(e.clientX || e.touches[0].clientX) - displaySlides.offsetLeft;
			setCurrentX(() => startx);
      displaySlides.style.cursor = "grab";
		}
	};

	const handleUnGrab = (e) => {
		const displaySlides = dispBox.current.firstElementChild.firstElementChild;
		if (e.target && pressed) {
			setPressed(false);
			displaySlides.style.cursor = "default";
		}
	};

  const checkBoundary = () => {
    const displaySlides = dispBox.current.firstElementChild.firstElementChild;
    const slides_rect = displaySlides.getBoundingClientRect();   
    if (parseInt(displaySlides.style.left) > 0) {
			displaySlides.style.left = "0px";
    } else if (slides_rect.right < 0) {
      displaySlides.style.left = `-${slides_rect.width}px`;
    }
  }

	const handleDrag = (e) => {
    if (!e.touches) {
      e.preventDefault();
    }
    if (!pressed) return;
    const displaySlides = dispBox.current.firstElementChild.firstElementChild;
    const x = e.clientX || e.touches[0].clientX;
    displaySlides.style.left = `${x - currentX}px`;
    checkBoundary();
	};

  useEffect(() => {
    const stopPressed = () => {
      if (pressed) setPressed(() => false);
    }
    window.addEventListener('mouseup', stopPressed)
    
    return () => {
      window.removeEventListener("mouseup", stopPressed);
    }
	}, [isMobile, dispBox, pressed]);

	return (
		<div
			className={is_display_box_opened ? "pd-display show" : "pd-display"}
			ref={dispBox}
		>
			<div className='pd-display__img-box'>
				{images && (
					<div
						className='pd-display__slides'
						onMouseDown={isMobile ? handleGrab : null}
						onTouchStart={isMobile ? handleGrab : null}
						onMouseUp={isMobile ? handleUnGrab : null}
						onTouchEnd={isMobile ? handleUnGrab : null}
						onMouseMove={isMobile ? handleDrag : null}
						onTouchMove={isMobile ? handleDrag : null}
					>
						<div className='pd-display__slide'>
							<img src={images[0].url} alt={name} className='pd-display__img' />
						</div>
						<div className='pd-display__slide'>
							<img src={images[1].url} alt={name} className='pd-display__img' />
						</div>
						<div className='pd-display__slide'>
							<img src={images[2].url} alt={name} className='pd-display__img' />
						</div>
					</div>
				)}
			</div>
			<div className='pd-display__text-box'>
				<p className='pd-display__text'>{description}</p>
				<p className='pd-display__info'>
					<span className='pd-display__info-type'>Material: </span>
					<span className='pd-display__info-text'>
						{materials && removeQuotes(materials)}
					</span>
				</p>
				<p className='pd-display__info'>
					<span className='pd-display__info-type'>Size: </span>
					<span className='pd-display__info-text'>
						{size && removeQuotes(size)}
					</span>
				</p>
				<div className='pd-display__cont'>
					<h5 className='pd-display__price'>${price}</h5>
					<button
						className='btn btn-secondary btn-cta cta-btn'
						onClick={() => add_bagpack_to_cart(product, 1)}
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDisplay;
