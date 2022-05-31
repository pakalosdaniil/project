import React, { useReducer } from "react";
import axios from "axios";

export const productContext = React.createContext()
const API = 'http://localhost:8000/products'
const INIT_STATE = {
    products: []
}

function reducer (state = INIT_STATE, action) {
    switch(action.type) {
        case 'GET_PRODUCTS':
            return {...state, products: action.payload}
        default:
            return state

    }
}

const ProductContextProvider = ({children}) => {

    const [state, dispatch] = useReducer (reducer, INIT_STATE)
    async function createProduct (newProduct) {
        await axios.post (API,newProduct)
    }

    async function getProducts () {
        let response = await axios (API)
        dispatch({
           type: "GET_PRODUCTS",
           payload: response.data
       });
    }

return <productContext.Provider value={{
    products: state.products,
    createProduct, 
    getProducts}}>
    {children}
</productContext.Provider>
}

export default ProductContextProvider