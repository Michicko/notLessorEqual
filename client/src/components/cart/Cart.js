import { useCartContext } from "../../contexts/cart_context";
import CartContent from "./CartContent";
import OrderForm from "./OrderForm";

const Cart = () => {
  const { closeCart } = useCartContext();
	return (
		<div className='cart-comp'>
			<div className='cart-container'>
				<h2 className='secondary-heading cart-heading'>Your cart</h2>
				<CartContent />
				<button className='btn btn-primary close-cart-btn' onClick={closeCart}>
					Go back to catalog
				</button>
			</div>
			<div className='order-form-container'>
				<h2 className='secondary-heading cart-heading'>Place an order</h2>
				<OrderForm />
			</div>
		</div>
	);
};

export default Cart;
