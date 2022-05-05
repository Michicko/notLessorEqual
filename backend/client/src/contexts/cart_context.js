import { createContext, useContext, useEffect, useReducer } from "react"
import { ADD_BAGPACK_TO_CART, CLOSE_CART, COUNT_CART_TOTALS, DECREASE_CART_ITEM_AMOUNT, INCREASE_CART_ITEM_AMOUNT, OPEN_CART, REMOVE_BAGPACK_FROM_CART } from "../Action";
import reducer from '../reducers/cart_reducer';


const getLocalStorageCart = () => {
	let cart = localStorage.getItem("cart");
	if (cart) {
		return JSON.parse(cart);
	} else {
		return [];
	}
};

const initialState = {
	isCartOpened: false,
	cart: getLocalStorageCart(),
	total_items: 0,
	total_amount: 0,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openCart = () => {
		dispatch({ type: OPEN_CART });
		document.body.style.overflow = "hidden";
	};

	const closeCart = () => {
		dispatch({ type: CLOSE_CART });
		document.body.style.overflow = "unset";
	};

  const add_bagpack_to_cart = (bagpack, amount) => {
		dispatch({ type: ADD_BAGPACK_TO_CART, payload: { bagpack, amount } });
		openCart();
  }
  
  const remove_bagpack_from_cart = (bagpack_id) => {
    dispatch({ type: REMOVE_BAGPACK_FROM_CART, payload: bagpack_id });
	}
	
	const increase_cart_item_amount = (_id) => {
		dispatch({ type: INCREASE_CART_ITEM_AMOUNT, payload: _id });

	}
	
	const decrease_cart_item_amount = (_id) => {
		dispatch({ type: DECREASE_CART_ITEM_AMOUNT, payload: _id });
	}

	// persist to localstorage
	useEffect(() => {
		dispatch({ type: COUNT_CART_TOTALS });
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{
				...state,
				openCart,
				closeCart,
				add_bagpack_to_cart,
				remove_bagpack_from_cart,
				increase_cart_item_amount,
				decrease_cart_item_amount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}


export const useCartContext = () => {
  return useContext(CartContext);
}
