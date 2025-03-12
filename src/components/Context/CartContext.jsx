

import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const cartStorage = localStorage.getItem('cart');
        return cartStorage ? JSON.parse(cartStorage) : [];
    });

    useEffect(( ) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    })
    console.log(cart);

    const addItem = (item, cantidad) => {
        // Verifica si el ítem ya está en el carrito
        if (!isInCart(item.id)) {
            // Si el ítem no está en el carrito, se agrega con la cantidad especificada
            setCart(prev => [...prev, { ...item, cantidad }]);
        } else {
            // Si el ítem ya está en el carrito, se actualiza la cantidad del producto
            setCart((prev) => 
                prev.map((prod) => 
                    // Si el ID del producto coincide con el ID del ítem agregado
                    prod.id === item.id 
                        // Se crea un nuevo objeto con la cantidad actualizada
                        ? { ...prod, cantidad: prod.cantidad + cantidad }
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
        localStorage.removeItem('cart');
    }

    const isInCart = (itemId) => {
        return cart.some((product) => product.id === itemId);
    }

    const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toFixed(2);

    const totalCantidad = cart.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <CartContext.Provider value= {{cart, addItem, removeItem, clearCart, total, totalCantidad}}>
            {children}
        </CartContext.Provider>
    )
}