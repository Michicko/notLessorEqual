import ContactForm from "./ContactForm"


const Contact = () => {
  return (
		<section className='contact-section'>
			<div className='container'>
				<div className='contact-content'>
					<h2 className='secondary-heading pg-heading'>Contact us</h2>
          <div className='contact-form-container'>
            <h4>Please leave a message</h4>
            <p>We'll get back to you soon.</p>
            <ContactForm/>
          </div>
				</div>
			</div>
		</section>
	);
}
 
export default Contact;