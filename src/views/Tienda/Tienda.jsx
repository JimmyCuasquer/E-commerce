import React, { useContext } from 'react';
import ShopCartContext from "../../context/ShopCartContext"
//Layout
import TableCart from '../../layouts/TableCart';
//importamos styles
import "../../views/Tienda/Tienda.css"

import {Button, Card} from 'react-bootstrap';

const Tienda = () => {
        
const {state, dispatch} =useContext(ShopCartContext)
console.log(state)
    return (
        <>
            <TableCart>
            {state.cart.map((product, index) => (
                <tr key={index}>
                    <td>{index +1}</td>
                    <td>{product.name}</td>
                    <td>
                        <Card className="cartimg">
                        <img className="imgesCart"src={product.img}
                        alt={product.name}
                        />
                        </Card>
                        </td>
                    <td>{product.description}</td>
                    <td>{product.cantidad}</td>
                    <td>{product.price}</td>
                    <td>
                        <Button variant="danger" 
                        onClick={()=>dispatch({type: "REMOVE", payload: {
                            id:product.id,
                            name: product.name,
                            price: product.price
                            }
                            })}>Remove</Button>
                    </td>
                </tr>
                ))}
        </TableCart>
        </>
        );
        
    }

export default Tienda;