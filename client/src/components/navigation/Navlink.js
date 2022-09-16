import { useCallback } from "react";
import { Link } from "react-scroll";
import { useProductsContext } from "../../contexts/products_context";

const Navlink = ({ navlink, setLinkClicked }) => {
	const { name, link } = navlink;
	const { isMobile } = useProductsContext();

	const chandleClick = useCallback(() => {
		if (isMobile) {
			setLinkClicked(true);
		}
	}, [setLinkClicked, isMobile]);

	return (
		<Link
			activeClass='active'
			className='nav-link'
			to={link}
			spy={true}
			smooth={true}
			delay={500}
			duration={1500}
			onClick={chandleClick}
		>
			{name}
		</Link>
	);
};

export default Navlink;
