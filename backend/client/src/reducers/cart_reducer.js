import {
	ADD_BAGPACK_TO_CART,
	CLOSE_CART,
	COUNT_CART_TOTALS,
	DECREASE_CART_ITEM_AMOUNT,
	INCREASE_CART_ITEM_AMOUNT,
	OPEN_CART,
	REMOVE_BAGPACK_FROM_CART,
} from "../Action";

const CartReducer = (state, action) => {
	if (action.type === OPEN_CART) {
		return { ...state, isCartOpened: true };
	}

	if (action.type === CLOSE_CART) {
		return { ...state, isCartOpened: false };
	}

	if (action.type === ADD_BAGPACK_TO_CART) {
		const { bagpack, amount } = action.payload;
		const { _id, name, materials, size, images, stock, price } = bagpack;
		const image = images[0].url;

		const temp_cart_item = state.cart.find((item) => item._id === _id);

		if (temp_cart_item) {
			const tempCart = state.cart.map((cartItem) => {
				if (cartItem._id === _id) {
					let newAmount = cartItem.amount + amount;
					if (newAmount > cartItem.stock) {
						newAmount = cartItem.stock;
					}

					return { ...cartItem, amount: newAmount };
				} else {
					return cartItem;
				}
			});

			return { ...state, cart: tempCart };
		} else {
			const new_cart_item = {
				_id,
				name,
				materials,
				size,
				image,
				amount,
				price,
				stock,
			};

			return { ...state, cart: [...state.cart, new_cart_item] };
		}
	}

	if (action.type === REMOVE_BAGPACK_FROM_CART) {
		const bagpack_id = action.payload;
		const tempCart = state.cart.filter(
			(cartItem) => cartItem._id !== bagpack_id
		);
		return { ...state, cart: tempCart };
	}

	if (action.type === INCREASE_CART_ITEM_AMOUNT) {
		const _id = action.payload;
		const tempCart = state.cart.map((cartItem) => {
			if (cartItem._id === _id) {
				let newAmount = cartItem.amount + 1;
				if (newAmount > cartItem.stock) {
					newAmount = cartItem.stock;
				}

				return { ...cartItem, amount: newAmount };
			} else {
				return cartItem;
			}
		});

		return { ...state, cart: tempCart };
	}

	if (action.type === DECREASE_CART_ITEM_AMOUNT) {
		const _id  = action.payload;

		const tempCart = state.cart.map((cartItem) => {
			if (cartItem._id === _id) {
				let newAmount = cartItem.amount - 1;
				if (newAmount < 1) {
					newAmount = 1;
				}
				return { ...cartItem, amount: newAmount };
			} else {
				return cartItem;
			}
		});

		return { ...state, cart: tempCart };
	}

	if (action.type === COUNT_CART_TOTALS) {
		const { total_items, total_amount } = state.cart.reduce(
			(total, cartItem) => {
				const { amount, price } = cartItem;
				total.total_items += amount;
				total.total_amount += price * amount;
				return total;
			},
			{
				total_items: 0,
				total_amount: 0,
			}
		);

		return { ...state, total_items, total_amount };
	}

	return `No matching action ${action.type}`;
};

export default CartReducer;
