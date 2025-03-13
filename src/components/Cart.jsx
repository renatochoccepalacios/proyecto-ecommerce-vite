import React, { useContext, useEffect } from 'react';
import { CartContext } from './Context/CartContext';
import { Link } from 'react-router-dom'; // Si estás usando React Router
import { CartItem } from './CartItem';

export const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext);

    useEffect( () => {
        document.body.classList.add('bg-[#ededed]');
        return () => {
            document.body.classList.remove('bg-[#ededed]');
        }
    }, [])

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
        <div className='mt-4  px-[2rem] '>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[1000px] mx-auto'>
                <div className='bg-white sm:col-span-2'>
                    <h1 className='py-[1.1rem] px-[2rem] text-2xl '>Carrito De Compras</h1>
                    {cart.map(producto => <CartItem key={producto.id} item={producto} />)}
                </div>

                <div className='shadow-[0_1px_2px_rgba(0,0,0,0.12)] flex flex-col gap-2 justify-between  bg-white p-[1.2rem]'>
                    <h3 className='font-semibold py-3.5 border-b-1'>Resumen de compra</h3>
                    <div>
                        <h4 className='flex justify-between'>Productos  <div>{cart.length}</div></h4>
                        <h4 className='flex justify-between'>Total  <div>${total}</div></h4></div>
                    <div className='py-3.5 flex gap-2 flex-col'>
                        <div className='flex flex-col text-center '>
                            <button onClick={() => clearCart()} className='py-[0.5rem] bg-blue-500 text-white cursor-pointer'>Limpiar carrito</button>
                            <Link to='/checkout' className='py-[0.5rem] bg-black text-white cursor-pointer'>Terminar Compra</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};