import { createContext, useContext, useEffect, useReducer } from "react";
import {
  GET_PRODUCTS_BEGINS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  NEXT_CATALOG_SLIDE,
  NEXT_HEADER_SLIDE,
  PREVIOUS_CATALOG_SLIDE,
  PREVIOUS_HEADER_SLIDE,
  SET_CATALOG_SLIDE_PRODUCT,
  SET_DESKTOP,
  SET_HEADER_SLIDE_INDEX,
  SET_HEADER_SLIDE_PRODUCT,
  SET_MOBILE,
} from "../Action";
import reducer from "../reducers/products_reducer";
import axios from "axios";

const initialState = {
  products_loading: false,
  products_error: false,
  isMobile: false,
  products_error_message: "",
  products: [],
  featured_products: [],
  current_header_slide_index: 0,
  current_header_slide_product: {},
  current_catalog_slide_index: 1,
  current_catalog_slide_product: {},
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchMessage = (message) => {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: message });
  };

  const nextHeaderSlide = () => {
    dispatch({ type: NEXT_HEADER_SLIDE });
  };
  const prevHeaderSlide = () => {
    dispatch({ type: PREVIOUS_HEADER_SLIDE });
  };

  const selectHeaderSlide = (index) => {
    dispatch({ type: SET_HEADER_SLIDE_INDEX, payload: index });
  };

  useEffect(() => {
    dispatch({ type: SET_HEADER_SLIDE_PRODUCT });
  }, [state.current_header_slide_index]);

  useEffect(() => {
    dispatch({ type: SET_CATALOG_SLIDE_PRODUCT });
  }, [state.current_catalog_slide_index]);

  const set_mobile = () => {
    const windowWidth = window.innerWidth || document.clientWidth;

    if (windowWidth <= 800 && !state.isMobile) {
      dispatch({ type: SET_MOBILE });
    } else if (windowWidth > 800 && state.isMobile) {
      dispatch({ type: SET_DESKTOP });
    }
  };

  // set mobile on resize
  useEffect(() => {
    set_mobile();
    window.addEventListener("resize", set_mobile);

    return () => {
      window.removeEventListener("resize", set_mobile);
    };
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch({ type: GET_PRODUCTS_BEGINS });
        // const res = await axios.get("http://127.0.0.1:8000/api/v1/bagpacks");
        const res = await axios.get(
          "https://notlessorequal.cyclic.app/api/v1/bagpacks"
        );
        // const res = await axios.get("/api/v1/bagpacks");

        if (res.data.status === "success") {
          dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data.data });
        }
      } catch (error) {
        if (error.response) {
          dispatchMessage(error.response.data.message);
        } else if (error.request) {
          dispatchMessage("Something went wrong, try again later");
          console.log(error.request);
        } else {
          dispatchMessage(error.message);
        }
      }
    };

    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        nextHeaderSlide,
        prevHeaderSlide,
        selectHeaderSlide,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
