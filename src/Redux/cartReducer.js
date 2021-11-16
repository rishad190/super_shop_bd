const initialState = {
  cart: [],
  product: [],
};
const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const findItem = state.cart.find((item) => item.id === action.id.id);
      if (findItem) {
        let cartIndex = state.cart.indexOf(findItem);

        let newArray = [...state.cart];
        newArray[cartIndex] = {
          ...newArray[cartIndex],
          quantity: findItem.quantity + 1,
        };
        const newCart = {
          ...state,
          cart: newArray,
        };

        return newCart;
      } else {
        const newCart = {
          ...state,
          cart: [...state.cart, { ...action.id, quantity: 1 }],
        };
        return newCart;
      }
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
