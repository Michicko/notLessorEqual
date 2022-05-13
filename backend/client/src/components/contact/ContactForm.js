import { useEffect, useRef, useState } from "react";

const ContactForm = ({
	setMessageSent,
	setMessage,
	submitBtnDisabled,
	setSubmitBtnDisabled,
}) => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [tc, setTc] = useState(false);

	const checky = useRef(null);
	const submitBtn = useRef(null);
	const handleOnchange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormState((values) => ({ ...values, [name]: value }));
	};

	const handletTc = () => {
		const checkbox = checky.current;
		checkbox.checked = tc;
		setTc(!tc);
	};

	useEffect(() => {
		if (submitBtnDisabled) {
			submitBtn.current.disabled = true;
		} else {
				submitBtn.current.disabled = false;
		}
	}, [submitBtnDisabled])

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (!tc) {
			return;
		}
		setMessage("Message sent. We'll get back to you shortly...");
		setMessageSent(true);
		setSubmitBtnDisabled(true);
		console.log({ ...formState, tc });
	};

	return (
		<form className='contact-form' onSubmit={handleOnSubmit}>
			<input
				type='text'
				name='name'
				id='name'
				className='text-input'
				placeholder='name'
				required
				value={formState.name || ""}
				onChange={handleOnchange}
			/>
			<input
				type='email'
				name='email'
				id='email'
				className='text-input'
				placeholder='email'
				required
				value={formState.email || ""}
				onChange={handleOnchange}
			/>
			<input
				type='tel'
				name='phone'
				id='phone'
				className='text-input'
				placeholder='telephone'
				required
				value={formState.phone || ""}
				onChange={handleOnchange}
			/>
			<input
				type='text'
				name='message'
				id='message'
				className='text-input'
				placeholder='message'
				required
				value={formState.message || ""}
				onChange={handleOnchange}
			/>
			<div className='form-group btn-contact-container'>
				<div className='form-control'>
					<input
						type='checkbox'
						name='tc'
						id='tc'
						className='form-checky'
						ref={checky}
						checked={tc === true ? true : false}
						onChange={handletTc}
					/>
					<label htmlFor='tc' className='cheky-box'></label>
					<span className='tc-text'>
						i agree with the terms and privacy policy
					</span>
				</div>
				<button className='btn btn-primary submit-btn' type='submit' ref={submitBtn}>
					send
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
