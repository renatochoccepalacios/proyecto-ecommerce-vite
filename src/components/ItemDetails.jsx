

import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"
import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";


export const ItemDetails = ({ id, imagen, nuevo, nombre, descripcion, precio, envioGratis, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {id, nombre, precio, imagen, descripcion}

        addItem(item, quantity);
    }

    return (


        <>
            <article
                className="max-w-[900px] m-auto flex flex-col md:flex-row  gap-[2rem] rounded-[0.8rem] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]  text-[clamp(0.1rem,5vw,1rem)]">
                <figure className="overflow-hidden col-span-1 flex justify-center">
                    <img src={imagen} alt="" className="hover:scale-[1.2] transition duration-500 ease-in-out min-h-[200px]" />
                </figure>
                <div className="flex flex-col justify-center gap-3 w-full p-[1.5rem]">
                    <div className="flex flex-col gap-[10px]">
                        <span className="text-amber-700 flex items-center">{envioGratis ? 'Envio gratis' : nuevo}</span>
                        <h2 className="font-medium text-[1.3rem]">{nombre}</h2>
                        <p className="text-gray-600">{descripcion}</p>
                        <p>$ {precio}</p>
                        <p>Stock: {stock}</p>
                        <div className="flex gap-2 justify-center items-center ">
                            {
                                quantityAdded > 0 ? (
                                    <Link to="/cart" className="text-white bg-black w-full py-2 px-3 rounded-[1.8rem] cursor-pointer text-center">Terminar mi compra</Link>
                                ) : (
                                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                                )
                            }
                        </div>
                    </div>
                    {/* <Link className="text-white bg-black w-full py-2 px-3 rounded-[1.8rem] cursor-pointer text-center">Agregar al carrito</Link> */}

                </div>
            </article>
        </>

    )

}