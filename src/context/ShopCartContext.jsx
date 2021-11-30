import React, { createContext, useReducer } from "react";

const ShopCartContext = createContext() 


const initialState ={
user: "Jimmy Cuasquer",
totalPrice: 0, 
cart: []
}

const reducer =(state, action ) =>{
    switch (action.type) {    
        case "ADD": 
            return state.cart.find((valor)=> valor.id === action.payload.id) ? {
                ...state,
                totalPrice: state.totalPrice + action.payload.price,
                cart: state.cart.map(valor =>
                valor.id === action.payload.id ? 
                {...valor, cantidad: valor.cantidad +1} : valor)}:{
                ...state,
                totalPrice: state.totalPrice + action.payload.price,
                 cart: [...state.cart, {...action.payload, cantidad: 1}],}

        case "REMOVE":
            console.log(action.payload.id)
            return{
                ...state,
                totalPrice: state.totalPrice - action.payload.price,
                cart: state.cart.filter(product => product.id !== action.payload.id)
            }
        default:
            return state
    }
}

const ShopCartProvider = ({children}) =>{

const [state, dispatch]= useReducer(reducer, initialState)

const data ={ state, dispatch}
    return (
        <ShopCartContext.Provider value={data}>
            {children}
        </ShopCartContext.Provider>
    )
}

export {ShopCartProvider} 
export default ShopCartContext