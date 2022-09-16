import { Link } from "react-scroll";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import { useCartContext } from "../../contexts/cart_context";
import { useProductsContext } from "../../contexts/products_context";
import navlinks from "../../utils/navlinks";
import Navlink from "./Navlink";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Navigation = () => {
	const { openCart, total_items } = useCartContext();
	const { isMobile } = useProductsContext();
	const [isSidebarOpened, setIsSidebarOpened] = useState(false);
	const [linkClicked, setLinkClicked] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpened(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpened(false);
	};

	// close sidebar if link clicked
	useEffect(() => {
		if (isMobile && linkClicked) {
			setIsSidebarOpened(false);
			setLinkClicked(false);
		}
		
	}, [linkClicked, isMobile]);

	// if it is not mobile close sidebar
	useEffect(() => {
		if (!isMobile && isSidebarOpened) {
			setIsSidebarOpened(false);
		}
	}, [isMobile, isSidebarOpened]);

	// hide overflow when sidebar is opened
	useEffect(() => {
		if (isSidebarOpened) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isSidebarOpened]);

	return (
		<div className='navigation'>
			{/* mobile btn */}
			{isMobile &&
				(isSidebarOpened ? (
					<RiCloseLine className='nav-icon' onClick={closeSidebar} />
				) : (
					<RiMenuLine className='nav-icon' onClick={openSidebar} />
				))}

			{/* logo */}
			<Link
				className='navigation-logo'
				to='header'
				spy={true}
				smooth={true}
				delay={500}
				duration={1500}
			>
				NotlessOrEQual
			</Link>
			{/* navs */}
			{!isMobile && (
				<nav className='navigation-nav'>
					<ul className='nav-list'>
						{navlinks.map((navlink, i) => {
							return (
								<li className='nav-item' key={i}>
									<Navlink navlink={navlink} />
								</li>
							);
						})}
					</ul>
				</nav>
			)}

			{isMobile && (
				<nav className={isSidebarOpened ? "mobile-nav opened" : "mobile-nav"}>
					<div className='navigation-bg'></div>
					<ul className='mobile-nav-list'>
						{navlinks.map((navlink, i) => {
							return (
								<li className='mobile-nav-item' key={i}>
									<Navlink navlink={navlink} setLinkClicked={setLinkClicked} />
								</li>
							);
						})}
					</ul>
				</nav>
			)}

			{/* cart btn */}
			<button className='nav-cart-btn' onClick={openCart}>
				{total_items > 0 ? (
					<span className='nav-cart-item-totals'>{total_items}</span>
				) : (
					""
				)}
				<CartIcon className='nav-cart-icon' />
			</button>
		</div>
	);
};

export default Navigation;
