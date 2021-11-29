import React, { useContext, useEffect, useState } from "react";
import { Card,  Button } from "react-bootstrap";
import ShopCartContext from "../../../context/ShopCartContext";

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

       console.log(stock);  
     dispatch({ type: "ADD", payload})
    }
return(
    <Card style={{width: "18rem" }}>
        <Card.Img  src={img}/>
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