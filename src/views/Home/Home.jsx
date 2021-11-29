import React, { useContext } from 'react';

//importamos el contex para usarlo
import ProductListContext from '../../context/ProductListContext';

//componentes
import Product from '../../components/Home/Products/Product';

//styles
import "../../views/Home/Home.css";
const Home = () =>  {

const {state: stateProduct} = useContext(ProductListContext)

   return (
        <div>
           <div className="product-list">
           {stateProduct && stateProduct.products && 
                 stateProduct.products.map(product =>(
                <Product 
                  key ={product.id}
                  name ={product.name}
                  price ={product.price}
                  id={product.id}
                  stock={product.stock}
                  description={product.description}
                  img ={product.img}
                 />
                ))}
           </div>
        </div>
        );
    
}
export default Home;