import React, { useContext } from "react";
import { CartContext } from './CartContext';


const ProductList:React.FC = () => {
    const { addItem } = useContext(CartContext);

    return(
        <div>
            <h2>products</h2>
            <button onClick={() => addItem({ id: 1, name: "Laptop", price: 50000,quantity: 1 })}>
                Add Laptop
            </button>
        </div>
    )
}

export default ProductList;