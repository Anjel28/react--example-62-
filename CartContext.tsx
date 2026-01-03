import React, { createContext, useState } from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

interface CartContextType {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addItem: () => {},
    removeItem: () => {}
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addItem = (item: CartItem) => setCart([...cart, item]);
    const removeItem = (id: number) => setCart(cart.filter(i => i.id !== id));
    return(
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
    )
}