const ContactForm = () => {
  return (
		<form className='contact-form'>
			<input
				type='text'
				name='name'
				id='name'
				className='text-input'
				placeholder='name'
			/>
			<input
				type='email'
				name='email'
				id='email'
				className='text-input'
				placeholder='email'
			/>
			<input
				type='text'
				name='phone'
				id='phone'
				className='text-input'
				placeholder='telephone'
			/>
			<input
				type='text'
				name='message'
				id='message'
				className='text-input'
				placeholder='message'
			/>
			<div className='form-group'>
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