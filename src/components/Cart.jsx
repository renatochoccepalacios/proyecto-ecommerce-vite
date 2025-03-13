import React, { useContext, useEffect } from 'react';
import { CartContext } from './Context/CartContext';
import { Link } from 'react-router-dom'; // Si estás usando React Router
import { CartItem } from './CartItem';

export const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext);

    useEffect(() => {
        document.body.classList.add('bg-[#ededed]');
        return () => {
            document.body.classList.remove('bg-[#ededed]');
        }
    }, [])

    console.log(cart)
    if (cart.length === 0) {
        return (
            <div className='text-center mt-[9rem]'>
                <h1>El Carrito está vacío</h1>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className='mt-[9rem]  px-[2rem] '>
            <div className='grid md:grid-cols-3 overflow-visible gap-4 max-w-[1000px] mx-auto'>
                <div className='md:col-span-2 bg-white sm:col-span-2 shadow-[0_1px_2px_rgba(0,0,0,0.12)]'>
                    <h1 className='py-[1.1rem] px-[2rem] text-lg'>Carrito De Compras</h1>
                    {cart.map(producto => <CartItem key={producto.id} item={producto} />)}
                </div>

                <div className="md:col-span-1 self-start sticky top-[8rem] ">
                    <div className="p-6 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.12)] flex flex-col gap-2 ">
                        <h3 className="font-semibold text-lg border-gray-300 ">Resumen de compra</h3>
                        <div className="flex flex-col gap-2">
                            <h4 className="flex justify-between text-gray-700">Productos <span>{cart.length}</span></h4>
                            <h4 className="flex justify-between text-lg font-bold">Total <span>${total}</span></h4>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <button onClick={clearCart} className="py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition">
                                Limpiar carrito
                            </button>
                            <Link to='/checkout' className="py-3 bg-blue-500 text-white font-semibold rounded-md text-center hover:bg-blue-600 transition">
                                Terminar Compra
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};