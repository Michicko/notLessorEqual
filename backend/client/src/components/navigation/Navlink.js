import { useCallback } from 'react';
import { Link } from 'react-scroll';

const Navlink = ({ navlink, setLinkClicked }) => {
	const { name, link } = navlink;

	const chandleClick = useCallback(() => {
		setLinkClicked(true);
	}, [setLinkClicked]);

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