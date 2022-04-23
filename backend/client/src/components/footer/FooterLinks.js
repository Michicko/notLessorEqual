import navlinks from '../../utils/navlinks';
import { Link } from 'react-scroll';

const FooterLinks = () => {
  return (
    <ul className="footer-list">
      {navlinks.map((navlink, i) => {
        const { name, link } = navlink;
        return (
					<li className='footer-item' key={i}>
						<Link
							className='footer-link'
							to={link}
							spy={true}
							smooth={true}
							delay={500}
							duration={1500}
						>
							{name}
						</Link>
					</li>
				);
      })}
    </ul>
   );
}
 
export default FooterLinks;