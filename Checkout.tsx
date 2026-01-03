import React, { useContext } from 'react';
import { CartContext } from './CartContext';


const Checkout:React.FC = () => {
    const {cart, removeItem} = useContext(CartContext);

    return(
        <div>
            <h2>Checkout</h2>
            {cart.map(item => (
                <p key={item.id}>
                    {item.name} - ₹{item.price} * {item.quantity}
                <button onClick={() =>  removeItem(item.id)}>Remove</button>
                </p>
            ))}
        </div>
    )
}

export default Checkout;