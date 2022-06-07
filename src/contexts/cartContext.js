import React, { useReducer } from "react";

export const cartContext = React.createContext();

const INITIAL_STATE = {
  cart: {},
  count: 0,
};

function redducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(redducer, INITIAL_STATE);

  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let isProductInCart = cart.products.some(
      item => item.item.id === product.id
    );

    if (isProductInCart) {
      cart.products = cart.products.filter(item => item.item.id !== product.id);
    } else {
      cart.products.push(newProduct);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function checkProductInCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let isProductInCart = cart.products.some(
      item => item.item.id === product.id
    );
    return isProductInCart;
  }

  return (
    <cartContext.Provider value={{ addProductToCart, checkProductInCart }}>
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
