import { useState } from 'react';

export const ItemCount = ({ initial, stock, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        console.log("stock", stock);
        console.log("stock",quantity)
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="Counter w-full flex flex-col gap-4">

            <div className="flex gap-[2rem] items-center justify-center sm:justify-start">
                <button className="py-[0.9rem] px-[1.5rem] text-[2rem] rounded-[5px] font-semibold cursor-pointer"
                    onClick={decrement} >
                    -
                </button>
                <h4 className=" text-[2rem]">{quantity}</h4>
                <button className="py-[0.9rem] px-[1.5rem] text-[2rem]  rounded-[5px] font-semibold cursor-pointer"
                    onClick={increment}>
                    +
                </button>
            </div>
            <div>
                <button className="text-white bg-black py-2 px-3 rounded-[1.8rem] cursor-pointer text-center w-full" onClick={() => onAdd(quantity)} disabled={!stock} >
                    Agregar al Carrito
                </button>
            </div>

        </div>

    )

} 