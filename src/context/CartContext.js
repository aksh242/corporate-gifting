import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { }
});

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prev => [...prev, { ...item, id: Date.now() }]);
    };

    const removeFromCart = (itemId) => {
        setCart(prev => prev.filter(item => item.id !== itemId));
    };

    const value = {
        cart,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};