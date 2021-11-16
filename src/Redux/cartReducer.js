const initialState = {
  cart: [],
  product: [],
};
const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newCart = {
        ...state,
        cart: [...state.cart, action.id],
      };
      return newCart;
    }
    case "REMOVE_FROM_CART": {
      const newRemoveCart = {
        ...state,
        cart: state.cart.filter((pd) => pd._id !== action.payload._id),
      };
      return newRemoveCart;
    }

    case "ADD_PRODUCT": {
      const product = {
        ...state,
        product: action.id,
      };
      return product;
    }
    default:
      return state;
  }
};
export default cartReducers;
