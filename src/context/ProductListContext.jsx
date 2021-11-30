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
        },
        {
            id: 4,
            name: "IdeaPad 1 14 amd R5",
            description: " AMD Athlon™ Silver 3050e (1MB Cache L2 / 4MB Cache L3, 1.40 GHz, Cores: 2, Threads: 4)",
            price: 3300000,
            img: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-s150-14-gallery-1.jpg?context=bWFzdGVyfHJvb3R8MTg0NzQyfGltYWdlL2pwZ3xoYWIvaDlkLzEwNTY1ODQ5Njc3ODU0LmpwZ3wwYWQ5Y2UzMmY3ZTA4OTU5MGYwODA1NThiZTZiMDdjMDRkM2VjYzJhMjA1MTc3YWJiNzEwY2NhZjg3ZTUwMGRi",
            stock: 5

        },
        {
            id: 5,
            name: "Computador Portatil HP 14",
            description: "Computador Portatil HP 14' Pulgadas 14-cf2067la Intel Core i3- 8 GB RAM- Disco Estado Sólido 256 GB -Gris Pizarra + Obsequios",
            price: 333000,
            img: "https://www.alkosto.com/medias/196337325012-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzEyMjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVlL2hkZi8xMDgwMTU4NjE3NjAzMC5qcGd8OWJhYTRkNjVkM2FlNTM2NWVkMWRhMDZjZjg4OThmZDY1OGNjMzM5OWM2OWM2ZTQ3MWQzODQ1MGJiYjhjMGEwYw",
            stock: 2

        },
        {
            id: 6,
            name: "Computador Convertible 2en1 LENOVO 10,1'",
            description: "Computador Convertible 2en1 LENOVO 10,1' Pulgadas D330 Intel Celeron - 4GB Ram - Disco Solido 64GB - Gris",
            price: 1100000,
            img: "https://www.alkosto.com/medias/195891963913-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxOTE2OTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2gzNC8xMDczNzgzMDcyMzYxNC5qcGd8NTAwNDUxMDFmYjk3M2VhYjM0ZjdjZWM1ZTc2YTU3N2QwZWQ1MTk3NTFiMjg5MzQzNTE2N2YyMDllMTRiZTJkNw",
            stock: 1

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