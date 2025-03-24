import { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial);

    const increment = () => {
        console.log("stock", stock);
        console.log("stock",cantidad)
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const decrement = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <div className="Counter w-full flex flex-col gap-4">

            <div className="flex gap-[2rem] items-center justify-center">
                <button className="py-[0.9rem] px-[1.5rem] text-[2rem] rounded-[5px] font-semibold cursor-pointer"
                    onClick={decrement} >
                    -
                </button>
                <h4 className=" text-[2rem]">{cantidad}</h4>
                <button className="py-[0.9rem] px-[1.5rem] text-[2rem]  rounded-[5px] font-semibold cursor-pointer"
                    onClick={increment}>
                    +
                </button>
            </div>
            <div>
                <button className="text-white bg-black py-2 px-3 rounded-[1.8rem] cursor-pointer text-center w-full" onClick={() => onAdd(cantidad)} disabled={!stock} >
                    Agregar al Carrito
                </button>
            </div>

        </div>

    )

} 