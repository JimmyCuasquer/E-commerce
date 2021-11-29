import React,{createContext, useReducer} from "react";

const ProductListContext = createContext()

//estado inicial 
const inicialState = {
    products: [
        {
            id: 1,
            name: "Computador Portatil HP 14",
            description: "Intel Core i3- 8 GB RAM- Disco Estado Sólido 256 GB -Gris Pizarra + Obsequios",
            price: 1000000,
            img: "https://megacomputer.com.co/wp-content/uploads/2020/10/Portatil-HP-15.6-Negro-sin-logo.jpg",
            stock: 5
        },
        {
            id: 2,
            name: "Computador Portatil HP 15,6'",
            description: " Intel Core i5- 8 GB RAM- Disco Estado Sólido 512 GB -Plata Natural + Obsequios",
            price: 2000000,
            img: "https://traguatan.com/3545-large_default/computador-portatil-bmax-maxbook-y13.jpg",
            stock: 3
        },
        {
            id: 3,
            name: "Computador Portatil HUAWEI 14",
            description: " Matebook D14 Intel Ci5 Disco 512GB SSD 8GB RAM 2 obsequios",
            price: 3100000,
            img: "https://http2.mlstatic.com/D_NQ_NP_885905-MCO46470296876_062021-O.jpg",
            stock: 6
        }
    ]
};

const reducer = (state,action) => {
    switch(action.type) { 
        default:
        return state;
    }
}

const ProductLisProvider =({children}) =>{

    const [state]= useReducer(reducer, inicialState)

    const data = {state}
    return(
        <ProductListContext.Provider value={data}>
            {children}
        </ProductListContext.Provider>
    )
}

export {ProductLisProvider}
export default ProductListContext;