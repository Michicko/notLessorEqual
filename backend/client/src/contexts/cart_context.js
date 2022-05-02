import { createContext, useContext, useReducer } from "react"
import { CLOSE_CART, OPEN_CART } from "../Action";
import reducer from '../reducers/cart_reducer';


const initialState = {
  isCartOpened: false
}

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openCart = () => {
    dispatch({ type: OPEN_CART });
    document.body.style.overflow = 'hidden';
  }

  const closeCart = () => {
    dispatch({ type: CLOSE_CART });
    document.body.style.overflow = "unset";
  }

  return <CartContext.Provider value={{...state, openCart, closeCart}}>
    {children}
  </CartContext.Provider>
}


export const useCartContext = () => {
  return useContext(CartContext);
}
