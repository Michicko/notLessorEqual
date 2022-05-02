import { CLOSE_CART, OPEN_CART } from "../Action";

const CartReducer = (state, action) => {

  if (action.type === OPEN_CART) {
    return { ...state, isCartOpened: true };
  }

  if (action.type === CLOSE_CART) {
     return { ...state, isCartOpened: false };
  }

  	return `No matching action ${action.type}`;
}

export default CartReducer;