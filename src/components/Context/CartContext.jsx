

import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    const addItem = (item, quantity) => {
        // Verifica si el ítem ya está en el carrito
        if (!isInCart(item.id)) {
            // Si el ítem no está en el carrito, se agrega con la cantidad especificada
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            // Si el ítem ya está en el carrito, se actualiza la cantidad del producto
            setCart((prev) => 
                prev.map((prod) => 
                    // Si el ID del producto coincide con el ID del ítem agregado
                    prod.id === item.id 
                        // Se crea un nuevo objeto con la cantidad actualizada
                        ? { ...prod, quantity: prod.quantity + quantity }
                        // Si no es el producto buscado, se mantiene igual
                        : prod
                )
            );
        }
    };


    const removeItem = (itemId) => {
        const CartUpdate = cart.filter(product => product.id !== itemId);
        setCart(CartUpdate);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some((product) => product.id === itemId);
    }

    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0).toFixed(2);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value= {{cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}