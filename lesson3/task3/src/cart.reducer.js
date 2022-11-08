import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const cartReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products].concat(action.payload),
      };

    case REMOVE_PRODUCT: {
      const deleteProduct = [...state.products].filter(
        (prod) => prod.payload !== action.productId
      );
      return { products: deleteProduct };
    }

    default:
      return state;
  }
};

export default cartReducer;
