import React from "react";
import { Link } from "react-router-dom";
import "../../../components/Custom/header/Header.css"
import { Nav,Navbar, Container } from "react-bootstrap";
const Header = ({cart, total}) =>{
   
  console.log(total);

    return(
        <Navbar bg="dark"  variant="dark" >
        <Container>
        <Navbar.Brand><Link className="title-Link" to="/">INICIO</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link ><Link className="title-Link" to="/Shopping">Tienda</Link></Nav.Link>
          <Nav.Link ><Link className="title-Link" to="/Pagos">Pagos</Link></Nav.Link>  
          <Navbar.Text><Link to="/Shopping"className="title-Link"> Cart: {cart.length}</Link></Navbar.Text>
          <Navbar.Text>total: ${cart.length <= 0 ? 0 : total}</Navbar.Text>
        </Nav>
        </Container>
      </Navbar>       
    )
}
export default Header;