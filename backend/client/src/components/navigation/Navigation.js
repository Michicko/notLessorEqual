import { Link } from "react-scroll";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import { useCartContext } from "../../contexts/cart_context";
import navlinks from "../../utils/navlinks";
import Navlink from "./Navlink";

const Navigation = () => {
	const { openCart } = useCartContext();
	const { total_items } = useCartContext();
	return (
		<div className='navigation'>
			{/* mobile btn */}
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
