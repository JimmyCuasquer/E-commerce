import React,{useContext} from "react";

//context
import ShopCartContext from '../context/ShopCartContext';

//cmponesntes
import Header from "../components/Custom/header/Header" 

const Main = ({children})=>{

    const {state}= useContext(ShopCartContext)
   
    return(
        <>
        <Header cart={state.cart} 
        total={state.totalPrice }
        name={state.name}/>
        {children}
        </>
    )
}
export default Main;