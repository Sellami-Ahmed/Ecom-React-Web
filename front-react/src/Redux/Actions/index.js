const setUser = (data) => {
  return {
    type: "SET_USER",
    data: data,
  };
};
const setLang = (
  data = {
    lang: "fr",
  }
) => {
  return {
    type: "SET_LANG",
    data: data,
  };
};
const addProduct = (data) => {
  return {
    type: "ADD_PRODUCT",
    data: data,
  };
};
const removeProduct = (data) => {
  return {
    type: "REMOVE_PRODUCT",
    data: data,
  };
};
const incrementProduct = (data) => {
  return {
    type: "INCREMENT_PRODUCT",
    data: data,
  };
};
const desincrementProduct = (data) => {
  return {
    type: "DESINCREMENT_PRODUCT",
    data: data,
  };
};
const clearCart = () => {
  return {
    type: "CLEAR_CART",
    data: [],
  };
};
export {
  setUser,
  setLang,
  clearCart,
  desincrementProduct,
  incrementProduct,
  removeProduct,
  addProduct,
};
