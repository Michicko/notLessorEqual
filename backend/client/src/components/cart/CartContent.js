import { IoMdClose } from 'react-icons/io';
import { BiMinus, BiPlus } from "react-icons/bi";
import cartitems from '../../utils/cartitems';

const CartContent = () => {
	return (
		<div className='cart'>
      <div className='cart-items-box'>
        <ul className="cart-items">
          {cartitems.map((item, i) => {
            const {name, material, size, stock, price } = item;
            return (
							<li className='cart-item' key={i}>
								<img
									src={require(`../../assets/images/${name}.jpg`).default}
									alt={name}
									className='cart-item-img'
								/>
								<div className='cart-item-details'>
									<h4 className='cart-item-name'>Backpack 095-2020</h4>
									<h4 className='cart-item-info'>
										<span className='info-type'>Material:</span>
										<span className='info'>Canvas, leather</span>
									</h4>
									<h4 className='cart-item-info'>
										<span className='info-type'>Size:</span>
										<span className='info'>50x30x25cm</span>
									</h4>
								</div>
								<div className='cart-item-ctrl-box'>
									<h4 className='cart-item-info price'>${price}</h4>
									<div className='cart-item-ctrl'>
										<button className='cart-item-btn dcr'>
											<BiMinus className='cart-item-icon' />
										</button>
										<input
											type='text'
											name='item-amount'
											id='item-amount'
											className='cart-item-amount'
											disabled
										/>
										<button className='cart-item-btn inc'>
											<BiPlus className='cart-item-icon' />
										</button>
									</div>
								</div>
								<h4 className='cart-item-total-price'>${price}</h4>
								<button className='cart-item-btn remove'>
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
					<h4>$230</h4>
				</div>
			</div>
		</div>
	);
};

export default CartContent;
