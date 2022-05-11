import { IoMdClose } from 'react-icons/io';
import { BiMinus, BiPlus } from "react-icons/bi";
import { useCartContext } from '../../contexts/cart_context';
import removeQuotes from "../../utils/removeQuotes";

const CartContent = () => {
	const {
		cart,
		remove_bagpack_from_cart,
		increase_cart_item_amount,
		decrease_cart_item_amount,
		total_amount,
	} = useCartContext();
	return (
		<div className='cart'>
			<div className='cart-items-box'>
				<ul className='cart-items'>
					{cart.map((item, i) => {
						const { _id, name, image, materials, size, amount, price } = item;
						return (
							<li className='cart-item' key={i}>
								<img src={image} alt={name} className='cart-item-img' />
								<div className='cart-item-details'>
									<h4 className='cart-item-name'>{name}</h4>
									<h4 className='cart-item-info'>
										<span className='info-type'>Material:</span>
										<span className='info'>{removeQuotes(materials)}</span>
									</h4>
									<h4 className='cart-item-info'>
										<span className='info-type'>Size:</span>
										<span className='info'>{removeQuotes(size)}</span>
									</h4>
								</div>
								<div className='cart-item-ctrl-box'>
									<h4 className='cart-item-info price'>${price}</h4>
									<div className='cart-item-ctrl'>
										<button
											className='cart-item-btn dcr'
											onClick={() => decrease_cart_item_amount(_id)}
										>
											<BiMinus className='cart-item-icon' />
										</button>
										<input
											type='text'
											name='item-amount'
											id='item-amount'
											className='cart-item-amount'
											disabled
											value={amount}
										/>
										<button
											className='cart-item-btn inc'
											onClick={() => increase_cart_item_amount(_id)}
										>
											<BiPlus className='cart-item-icon' />
										</button>
									</div>
								</div>
								<h4 className='cart-item-total-price'>${amount * price}</h4>
								<button
									className='cart-item-btn remove'
									onClick={() => remove_bagpack_from_cart(_id)}
								>
									<IoMdClose className='cart-item-icon' />
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div className='cart-totals'>
				<div className='cart-total-price'>
					<h4>Total</h4>
					<h4>${total_amount}</h4>
				</div>
			</div>
		</div>
	);
};

export default CartContent;
