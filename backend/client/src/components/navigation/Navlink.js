import { Link } from 'react-scroll';

const Navlink = ({ navlink }) => {
  const { name, link } = navlink;
  return (
		<Link
			activeClass='active'
			className='nav-link'
			to={link}
			spy={true}
			smooth={true}
			delay={500}
			duration={1500}
		>
			{name}
		</Link>
	);
}
 
export default Navlink;