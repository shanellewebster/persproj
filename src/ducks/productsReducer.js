import axios from "axios";

// initial state
const initialState = {
  products: [],
  currentProduct: [],
  category: []
};

// action types
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
const FILTER_PRODUCTS = "FILTER_PRODUCTS";

// action creators

export function getProducts() {
  return {
    type: GET_PRODUCTS,
    payload: axios.get(`/api/products`)
  };
}

export function getOneProduct(id) {
  return {
    type: GET_ONE_PRODUCT,
    payload: axios.get(`/api/products/${id}`)
  };
}
export function filterByProducts(category) {
  return {
    type: FILTER_PRODUCTS,
    payload: axios.get(`/api/products`)
  };
}

// reducer function
export default function productsReducer(state = initialState, action) {
  // console.log(action);

  switch (action.type) {
    case `${GET_PRODUCTS}_FULFILLED`:
      return Object.assign({}, state, { products: action.payload.data });
    case `${GET_ONE_PRODUCT}_FULFILLED`:
      return Object.assign({}, state, { currentProduct: action.payload.data });
    case `${FILTER_PRODUCTS}_FULFILED`:
      return Object.assign({}, state, { category: action.payload.data });
    default:
      return state;
  }
}
