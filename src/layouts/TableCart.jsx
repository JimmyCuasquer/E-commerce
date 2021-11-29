import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ShopCartContext from "../context/ShopCartContext";

import { Table } from "react-bootstrap";
//importamos estilos CSS
import "../layouts/styles/TableCart.css"

const TableCart = ({children}) =>{

  const {state}= useContext(ShopCartContext)

return(
<div className="table">
  {
    state.cart.length > 0 ? (
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Producto</th>
      <th>presentacion</th>
      <th>Description</th>
      <th>Cant</th>
      <th>$</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
      {children}
    <td>Total: ${state.totalPrice}</td>
     </tbody>
</Table>
    ): (
      <Link to="/">Ve a comprar tu producto</Link>
    )
  }

</div>
    )
}
export default TableCart;