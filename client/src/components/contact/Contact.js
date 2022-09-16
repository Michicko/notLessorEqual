import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
	const [messageSent, setMessageSent] = useState(false);
	const [message, setMessage] = useState("");
	const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

	useEffect(() => {
		if (messageSent) {
			const timer = setTimeout(() => {
				setMessageSent(false);
				setMessage("");
				setSubmitBtnDisabled(false)
			}, 7000);

			// clear timeout

			return () => {
				clearTimeout(timer);
			};
		}
	}, [messageSent]);

	return (
		<section className='contact-section' id='contact'>
			<div className='container'>
				<div className='contact-content'>
					<h2 className='secondary-heading pg-heading'>Contact us</h2>
					<div className='contact-form-container'>
						<h4>Please leave a message</h4>
						<p>We'll get back to you soon.</p>
						<ContactForm
							setMessage={setMessage}
							setMessageSent={setMessageSent}
							submitBtnDisabled={submitBtnDisabled}
						setSubmitBtnDisabled={setSubmitBtnDisabled}
						/>
						{messageSent && <p className='contact-alert'>{message}</p>}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
