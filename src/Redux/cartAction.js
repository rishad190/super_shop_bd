export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    id,
  };
};
export const removeFromCart = (payload) => {
  return {
    type: "REMOVE_FROM_CART",
    payload,
  };
};

export const allProductAdd = (id) => {
  return {
    type: "ADD_PRODUCT",
    id,
  };
};
