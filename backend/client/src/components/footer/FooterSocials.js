import { AiFillInstagram, AiFillBehanceSquare } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";

const FooterSocials = () => {
	return (
		<div className='footer-socials'>
			<button className='footer-social-link' type='button'>
				<RiFacebookFill className='footer-social-icon' />
			</button>
			<a
				href='https://www.behance.net/NotlessOrequal'
				target='_blank noreferer'
				className='footer-social-link'
			>
				<AiFillBehanceSquare className='footer-social-icon' />
			</a>
			<a
				href='https://www.instagram.com/notlessorequal/'
				target='_blank noreferer'
				className='footer-social-link'
			>
				<AiFillInstagram className='footer-social-icon' />
			</a>
		</div>
	);
};

export default FooterSocials;
