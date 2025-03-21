import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'

export const CartItem = ({ item, index }) => {

    const { removeItem } = useContext(CartContext);

    return (
        <>
            {/* <img src={item.imagen} alt="no hay imagen" />
            <h1>{item.nombre}</h1>
            <p>precio por unidad: {item.precio}</p>
            <p>cantidad: {item.quantity}</p>
            <div >
                <p>Subtotal: {(item.quantity * item.precio).toFixed(2)}</p>
                <button onClick={()=> removeItem(item.id)}>Eliminar</button>
            </div> */}




            <article  className={`grid md:grid-cols-2  p-[2rem] gap-[2rem] text-[clamp(0.1rem,5vw,1rem)] 
                ${index > 0 ? 'border-t-[1px] border-gray-300' : ''}`}>
                <figure className="overflow-hidden col-span-1">
                    <img src={item.imagen} alt="" className="hover:scale-[1.2] transition duration-500 ease-in-out" />
                </figure>
                <div className="flex flex-col justify-center gap-3 col-span-1 ">
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="font-medium text-[1.3rem]">{item.nombre}</h2>
                        <p>Cantidad: {item.cantidad}</p>
                        <p> $ {(item.cantidad * item.precio).toFixed(2)}</p>
                        <button onClick={() => removeItem(item.id)} className='bg-red-400 p-[10px] text-white cursor-pointer'>Eliminar</button>
                    </div>
                    {/* <Link className="text-white bg-black w-full py-2 px-3 rounded-[1.8rem] cursor-pointer text-center">Agregar al carrito</Link> */}

                </div>
            </article>
        </>
    )
}
