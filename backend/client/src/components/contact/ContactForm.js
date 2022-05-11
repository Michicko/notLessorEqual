const ContactForm = () => {
  return (
		<form className='contact-form'>
			<input
				type='text'
				name='name'
				id='name'
				className='text-input'
				placeholder='name'
				required
			/>
			<input
				type='email'
				name='email'
				id='email'
				className='text-input'
				placeholder='email'
				required
			/>
			<input
				type='tel'
				name='phone'
				id='phone'
				className='text-input'
				placeholder='telephone'
				required
			/>
			<input
				type='text'
				name='message'
				id='message'
				className='text-input'
				placeholder='message'
				required
			/>
			<div className='form-group btn-contact-container'>
				<div className='form-control'>
					<input type='checkbox' name='tc' id='tc' className='form-checky' />
					<label htmlFor='tc' className='cheky-box'></label>
					<span className='tc-text'>
						i agree with the terms and privacy policy
					</span>
				</div>
				<button className='btn btn-primary submit-btn' type='submit'>
					send
				</button>
			</div>
		</form>
	);
}
 
export default ContactForm;