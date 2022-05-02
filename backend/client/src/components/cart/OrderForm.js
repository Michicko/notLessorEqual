const OrderForm = () => {
	return (
		<form className='order-form'>
			<input
				type='text'
				name='name'
				id='name'
				className='text-input light'
				placeholder='name'
			/>
			<input
				type='email'
				name='email'
				id='email'
				className='text-input light'
				placeholder='email'
			/>
			<input
				type='tel'
				name='phone'
				id='phone'
				className='text-input light'
				placeholder='telephone'
			/>
			<input
				type='text'
				name='address'
				id='address'
				className='text-input light'
				placeholder='address'
			/>
			{/* delivery */}
			<div className='form-inner-container'>
				<h4 className='form-text'>Choose the way of delivery</h4>
				<div className='form-control'>
					<div className='radio-box'>
						<input
							type='radio'
							name='delivery'
							id='ems'
							className='input-radio'
						/>
						<label htmlFor='ems' className='radio-label'></label>
						<span className='check-text'>Ems</span>
					</div>
					<div className='radio-box'>
						<input
							type='radio'
							name='delivery'
							id='dhl'
							className='input-radio'
						/>
						<label htmlFor='dhl' className='radio-label'></label>

						<span className='check-text'>Dhl</span>
					</div>
					<div className='radio-box'>
						<input
							type='radio'
							name='delivery'
							id='ups'
							className='input-radio'
						/>
						<label htmlFor='ups' className='radio-label'></label>
						<span className='check-text'>Ups</span>
					</div>
				</div>
			</div>

			{/* payment */}
			<div className='form-inner-container'>
				<h4 className='form-text'>Choose the way of payment</h4>
				<div className='form-control'>
					<div className='radio-box'>
						<input
							type='radio'
							name='payment'
							id='cash'
							className='input-radio'
						/>
						<label htmlFor='cash' className='radio-label'></label>
						<span className='check-text'>cash</span>
					</div>
					<div className='radio-box'>
						<input
							type='radio'
							name='payment'
							id='credit-card'
							className='input-radio'
						/>
						<label htmlFor='credit-card' className='radio-label'></label>

						<span className='check-text'>credit card</span>
					</div>
					<div className='radio-box'>
						<input
							type='radio'
							name='payment'
							id='paypal'
							className='input-radio'
						/>
						<label htmlFor='paypal' className='radio-label'></label>
						<span className='check-text'>paypal</span>
					</div>
				</div>
			</div>
			{/* coupon btn */}
			<div className='form-group'>
				<input
					type='text'
					name='coupon'
					id='coupon'
					className='text-input light'
					placeholder='coupon'
				/>
				<button className='btn btn-primary order-btn'>Order</button>
			</div>
		</form>
	);
};

export default OrderForm;
