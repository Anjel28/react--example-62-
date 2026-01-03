import React, { useReducer } from "react";

type CartItem = {
    id: number;
    name: string;
    price: number;
};

type  Action =
| {type: "ADD_ITEM"; item: CartItem}
| {type: "REMOVE_ITEM"; id: number}
| {type: "CLEAR_CART"};

function cartReducer(state: CartItem[], action: Action): CartItem[] {
    switch(action.type){
        case "ADD_ITEM":
            return  [...state, action.item];
            case "REMOVE_ITEM":
                return state.filter((item) => item.id !== action.id);
                case "CLEAR_CART":
                    return [];
                    default:
                        return state;
    }
}

const ShoppingCart:React.FC = () => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return(
        <div>
            <h2>My Shopping Cart</h2>

         <button onClick={() =>
            dispatch({type: "ADD_ITEM", item: {id: 1, name: "Shoes", price: 1200},
            })
         }>
           Add Shoes
         </button>
         
         <button onClick={()=>
            dispatch({type: "REMOVE_ITEM", id: 1})
         }>
           Remove Shoes
         </button>

         <button onClick={()=> 
            dispatch({type: "CLEAR_CART" })}>
              Clear Cart
         </button>

         <ul>
            {cart.map((item) => (
                <li key={item.id}>{item.name} - ₹{item.price}</li>
            ))}
         </ul>
        </div>
    )
}

export default ShoppingCart;