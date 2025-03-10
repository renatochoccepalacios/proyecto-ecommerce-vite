import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';
import { Link } from 'react-router-dom'; // Si estás usando React Router
import { CartItem } from './CartItem';

export const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext);
    console.log(cart)
    if (cart.length === 0) {
        return (
            <>
                <h1>El Carrito está vacío</h1>
                <Link to="/">Volver al inicio</Link>
            </>
        );
    }

    return (
        <div className='mt-4 grid grid-cols-2 gap-4'>
            <div>

            {cart.map(producto => <CartItem key={producto.id} item={producto} />)}
            </div>

            <div>
                <button onClick={() => clearCart()} >Limpiar carrito</button>
                <Link to='/checkout' >Checkout </Link>
            <h2>total {total}</h2>

            </div>
        </div>
    );
};