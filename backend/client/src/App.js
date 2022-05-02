import { useState } from "react";
import Cart from "./components/cart/Cart";
import { useCartContext } from "./contexts/cart_context";
import { useProductsContext } from "./contexts/products_context";
import Home from "./pages/Home";
import Portal from "./Portal";

function App() {
  const { isCartOpened } = useCartContext();
  const { products_loading } = useProductsContext();
  
  if (products_loading) {
    return <div className="loading">
      <h1>Loading....</h1>
    </div>
  }

  return (
    <>
      <Portal>
        {isCartOpened && <Cart/>}
      </Portal>
      <Home/>
    </>
  );
}


export default App;
