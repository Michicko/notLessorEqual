import { useProductsContext } from "./contexts/products_context";
import Home from "./pages/Home";

function App() {
  const { products_loading } = useProductsContext(); 
  
  if (products_loading) {
    return <div className="loading">
      <h1>Loading....</h1>
    </div>
  }

  return (
    <>
      <Home/>
    </>
  );
}


export default App;
