import {
	GET_PRODUCTS_BEGINS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	NEXT_HEADER_SLIDE,
	PREVIOUS_HEADER_SLIDE,
	SET_HEADER_SLIDE_INDEX,
	SET_HEADER_SLIDE_PRODUCT,
} from "../Action";

const ProductReducer = (state, action) => {
	if (action.type === GET_PRODUCTS_BEGINS) {
		return { ...state, products_loading: true };
	}

	if (action.type === GET_PRODUCTS_ERROR) {
		const message = action.payload;
		return {
			...state,
			products_loading: false,
			products_error: true,
			products_error_message: message,
		};
	}

	if (action.type === GET_PRODUCTS_SUCCESS) {
		const products = action.payload.bagpacks;
		const featured_products = products.filter(
			(product) => product.featured === true
		);
		const current_header_slide_product =
			featured_products[state.current_header_slide_index];

		return {
			...state,
			products_loading: false,
			products_error_message: "",
			products,
			featured_products,
			current_header_slide_product,
		};
	}

	if (action.type === NEXT_HEADER_SLIDE) {
		let current_header_slide_index = state.current_header_slide_index;
		current_header_slide_index = state.current_header_slide_index + 1;
		if (
			state.current_header_slide_index >=
			state.featured_products.length - 1
		) {
			current_header_slide_index = 0;
		}

		return {
			...state,
			current_header_slide_index,
		};
	}

	if (action.type === PREVIOUS_HEADER_SLIDE) {
		let current_header_slide_index = state.current_header_slide_index;
		current_header_slide_index = state.current_header_slide_index - 1;
		if (state.current_header_slide_index <= 0) {
			current_header_slide_index = state.featured_products.length - 1;
		}

		return {
			...state,
			current_header_slide_index,
		};
	}

	if (action.type === SET_HEADER_SLIDE_PRODUCT) {
		const current_header_slide_product =
			state.featured_products[state.current_header_slide_index];
		return {
			...state,
			current_header_slide_product,
		};
	}

	if (action.type === SET_HEADER_SLIDE_INDEX) {
		const index = action.payload;

		return {
			...state,
			current_header_slide_index: index,
		};
	}

	return `No matching action ${action.type}`;
};

export default ProductReducer;
