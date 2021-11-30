import React, { useContext, useEffect, useState } from "react";
import { Card,  Button } from "react-bootstrap";

import ShopCartContext from "../../../context/ShopCartContext";

import "../Products/Products.css";

const Product = ({name, description,img, price, id,stock }) =>{


    const {dispatch} =useContext(ShopCartContext)
    
    const [payload, setPayload] = useState({})

    useEffect(()=>{
        setPayload({
        name,
        description,
        img,
        price,
        id,
        stock
        })
        // eslint-disable-next-line
    },[])

   const handleDispatch =(payload) => {  
     dispatch({ type: "ADD", payload})
    }
return(
        <Card className="card-content">
            <Card.Img  className="card-img" src={img}></Card.Img>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Button variant="danger">Disponibles {stock}</Button>
            <Button variant="primary"
                onClick={()=> handleDispatch({...payload})} 
                >
                llevalo por ${price} </Button>
        </Card>
)
}
export default Product;