import FooterCreators from "./FooterCreators"
import FooterLinks from "./FooterLinks"
import FooterSocials from "./FooterSocials"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <FooterSocials />
          <FooterLinks />
          <FooterCreators/>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;